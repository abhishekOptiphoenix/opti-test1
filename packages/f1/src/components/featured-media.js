import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ({ state, id }) => {
  const media = state.source.attachment[id];
  


  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <FeaturedContainer>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </FeaturedContainer>
  );
};

export default connect(FeaturedMedia);

const FeaturedContainer = styled.div`
  margin-bottom:1rem;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  max-height:400px;
  width: 100%;
  object-fit:cover;
  border-radius:5px;
`;
