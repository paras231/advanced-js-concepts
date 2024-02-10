import { useState } from "react";
import styles from "./popper.module.css";
import { Popover } from "react-tiny-popover";


// description and requirements-:

// for a custom select box we first need a popover component that actually show the scrollable options to select.
// then we need a input element that can be used to type and create the options
// it should have multiple select options.
// the select box should be createable , selectable , and searchable.
// it should contain a option to clear all the selected options.

const CustomSelectbox = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <>
      <Popover
        isOpen={isPopoverOpen}
        positions={["bottom"]} // preferred positions by priority
        content={<PopoverContent />}
      >
        <button
          className={styles.popper_btn}
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        >
          Click me!
        </button>
      </Popover>
    </>
  );
};

export default CustomSelectbox;

function PopoverContent() {
  return (
    <>
      <div className={styles.popper_content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        dignissimos labore neque iste quaerat nemo rerum ut laboriosam possimus
        optio quibusdam doloribus odit sequi animi sit aliquid eos maiores quos
        eaque, veniam similique temporibus? Voluptas officiis doloremque neque
        natus accusantium Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Debitis maiores officiis aliquam, in incidunt dolor expedita a
        voluptatem dolorum aut quam, voluptatum facilis ex cum eum! Hic id
        necessitatibus est quae deserunt quaerat quos in reprehenderit natus
        rerum! Officia animi, exercitationem odit voluptatem distinctio corrupti
        velit magnam ipsam fugiat laborum architecto vitae ex illo accusantium
        impedit dolores. Facere adipisci molestiae reiciendis aliquid. Possimus
        eaque esse architecto vel quo assumenda. Molestiae sunt autem asperiores
        doloribus fuga quam ad reprehenderit optio! Itaque, minus laudantium!
        Temporibus quae saepe laudantium nesciunt debitis itaque ipsum! Optio
        dolorem in, ducimus qui animi debitis ad tempora itaque.
      </div>
    </>
  );
}
