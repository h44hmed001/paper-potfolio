import Element from "@/components/Element";
import React from "react";

const Elements = () => {
  return (
    <div className=" flex  justify-between mx-auto">
      <Element
        imgURL="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
        featured
        label="AVRO | KO"
        text="
        AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars. "
      />
      <Element
        imgURL="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
        label="THE ROGER HUB"
        text="The Roger Hub is an immersive web experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer."
      />
      <Element
        imgURL="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/61cdc506856e75d4b33cd9bd_thumbnail-small.jpeg?"
        label="BOOKS OF YE"
        featured
        text="The Books of Ye is a conceptual NFT web experience depicting the five Books of Moses, in which each instance of God is replaced with Ye (Kanye West)."
      />
    </div>
  );
};

export default Elements;
