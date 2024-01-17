import { useEffect, useState,useRef } from "react";
import "./scrolldown.css";
import { useScrollDirection } from "../customHooks/captureScrollDirection";
const ScrollDown = () => {
  // create a simple navbar which have some effects when window scrolls down

const elementRef = useRef(null);

const {scrollDirection} = useScrollDirection();
console.log(scrollDirection);
//   create scroll events logic here-:



useEffect(()=>{
  function scrollEvent(event) {
    if (elementRef.current) {
      const maxHeight = 50;
      const currentHeight = elementRef.current.offsetHeight;
      const newHeight = currentHeight + 10;
      console.log(currentHeight); 
    
      if (scrollDirection === "up") {
        elementRef.current.style.background = '';
        elementRef.current.style.height = 'initial';
      } else {
        console.log('running else');
        if (newHeight <= maxHeight) {
          elementRef.current.style.height = `${newHeight}px`;
        }
        elementRef.current.style.transition = 'height 2s ease, background-color 1s ease';
        // elementRef.current.style.background = 'red';
      }
    }
    
  }
  window.addEventListener("scroll",scrollEvent);
  return () => {
    window.removeEventListener('scroll', scrollEvent);
  };
},[scrollDirection])



  return (
    <>
      <main>
        <section ref={elementRef} className="main_nav_container">
          <span>HOME</span>
          <span>HOME</span>
          <span>HOME</span>
          <span>HOME</span>
          <span>HOME</span>
        </section>
        <section  className="main_content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quo
          quaerat quidem sunt non consequatur earum obcaecati totam dolores quis
          voluptatibus vero suscipit aperiam ipsam aliquid quibusdam, expedita
          ut autem debitis dolor veritatis ducimus nulla iure corrupti. Quos aut
          vitae molestias natus eaque ut dicta exercitationem labore dolorem
          nemo earum dolorum porro, soluta optio dignissimos eos maiores
          doloremque ullam accusamus consequuntur magni inventore illo! Et
          officia facilis voluptatum debitis at, error numquam culpa veniam
          fugit corrupti nesciunt hic vel repellendus autem, repudiandae quam
          modi explicabo accusamus provident! Animi magni quo voluptatibus
          dolore sed nemo debitis aliquid mollitia, quis eum nobis consequatur
          quas veritatis doloremque quasi nam veniam dicta nihil ea, blanditiis
          optio aspernatur ab architecto sit. Inventore perspiciatis distinctio,
          ipsum doloribus adipisci quis nostrum minus dolor dolorum totam vero,
          earum amet rerum doloremque tempora animi in. Vero in dignissimos,
          incidunt aliquid atque quisquam nostrum sunt ea maxime itaque suscipit
          praesentium similique corrupti accusamus beatae ipsam deleniti illo
          minus cumque neque repudiandae enim nulla? Asperiores quidem numquam
          assumenda recusandae adipisci harum aut beatae optio, quam nobis,
          alias, non veritatis nisi sit! Placeat magnam aliquam reprehenderit
          nulla debitis, ullam, dignissimos cumque voluptas dolorem nesciunt
          autem quo ducimus corporis nisi nostrum id natus. Dolore non dolorum
          quam, quis nam velit dignissimos, mollitia repellat soluta aut quae
          praesentium reiciendis provident debitis dolores fuga repellendus
          perferendis porro esse hic voluptatum corporis aspernatur alias quia.
          Ex at iure saepe fugiat ad? Ipsam cupiditate facilis aspernatur
          beatae. Voluptatibus maiores autem quia in inventore distinctio,
          aliquid cumque enim rem quibusdam, nihil explicabo praesentium a nulla
          vero. Vero aut nemo aliquam tempora magni, harum, dolor beatae nam ad
          quibusdam officia minus sequi odio aliquid saepe sunt omnis iusto
          impedit eligendi quis facilis adipisci velit, esse molestiae. Fugit at
          officiis, itaque aliquam reprehenderit labore voluptatum qui numquam
          corrupti non provident magni nisi voluptatibus velit quo veritatis
          quod minima, exercitationem facere. Sed sit dolorum cumque amet nisi
          facere nesciunt velit error aliquam tenetur, dolor consectetur,
          asperiores assumenda perspiciatis obcaecati! Aperiam, maiores
          molestiae quisquam voluptas dolorum facilis eos vitae quo. Similique
          laudantium expedita officia voluptas illum debitis consectetur, est
          omnis vel pariatur culpa ipsum ea at quasi eum aliquam in dolore totam
          esse adipisci nesciunt incidunt deserunt alias eveniet? Veniam quos,
          deleniti, quisquam explicabo, sint officia hic molestiae saepe
          consequatur incidunt rerum? Repellendus totam quis iste, nemo porro
          unde obcaecati delectus illum. Mollitia aperiam minima molestiae
          voluptatibus repellat earum fuga perspiciatis quo? Pariatur non
          recusandae, molestiae eos reprehenderit necessitatibus ducimus magni
          obcaecati repellat. Error inventore, fugiat quo quos quaerat
          repellendus sint sunt necessitatibus similique sequi. Libero optio
          odit dolores? Fuga, adipisci quaerat. Culpa iusto, repellendus
          provident id et neque quos. Unde nisi sed eveniet assumenda! Saepe
          delectus eveniet qui dolorum possimus voluptas, esse provident aut!
          Expedita aut libero a voluptas ad delectus quo rem dolore corporis,
          necessitatibus quas natus quisquam cupiditate beatae sit quos minima
          enim. Tempora magni voluptates delectus architecto provident dicta
          illum minus facilis quo, eum corrupti placeat ad, error qui similique
          voluptatem. Vero alias sed itaque quo ad qui. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Vitae consectetur sequi, officiis
          iste laboriosam voluptatem voluptates placeat aperiam. Fuga commodi
          asperiores incidunt aliquid hic voluptas quam quod? Aliquam ipsa,
          dolor deleniti eos rem dicta amet est quas quo a quae corporis beatae
          modi perferendis eligendi tempore pariatur quibusdam, nihil quis nisi
          quia molestiae ab aperiam. Maiores laudantium id error consectetur
          totam? Similique culpa incidunt illo totam numquam quidem tempore ad
          voluptas deserunt! Eum illo molestiae assumenda fugiat neque
          repellendus consequatur, quos ullam natus voluptatum saepe non soluta
          nihil quaerat rerum eveniet alias! Accusantium id placeat cumque
          culpa! Hic sunt perferendis reiciendis, consequuntur molestiae dolorem
          possimus voluptate nihil adipisci temporibus quis debitis nobis harum
          itaque quo unde soluta dignissimos voluptatibus odit maxime sequi.
          Repellat suscipit at ullam atque earum corporis debitis molestiae
          dolore magni sapiente facilis, quae nulla. Vitae nulla, commodi neque
          non distinctio facilis perferendis cumque eos quam dicta consectetur
          saepe, quaerat, iste illo dolores. Cupiditate magni harum maiores
          aliquam asperiores atque esse, sint voluptatum sequi, tempore
          possimus. Rem commodi molestiae adipisci sit nihil ullam dolorum quasi
          beatae, nostrum doloremque aliquid eius laudantium voluptatem numquam
          consectetur eos minima in hic officia magnam quo obcaecati placeat
          facere? Dolores possimus neque explicabo aspernatur veritatis
          temporibus tempore suscipit, odit nemo ad magnam placeat consequuntur
          animi nam laboriosam adipisci illum facere nesciunt blanditiis
          provident nobis soluta voluptates fugiat. Voluptate est quam
          exercitationem? Quisquam, necessitatibus! Dolor delectus non itaque
          illo facilis voluptates vel doloribus libero quas amet accusantium
          expedita blanditiis, sunt vitae. Culpa rem reiciendis temporibus
          pariatur aut alias, modi laudantium ratione illum tempore, beatae ad
          incidunt laborum blanditiis? Qui laboriosam voluptates dolores,
          distinctio velit quasi, voluptate provident quibusdam officia libero
          deserunt. Reiciendis dolorem asperiores sed, similique facere,
          voluptates doloremque magnam eius labore porro saepe commodi veritatis
          voluptas possimus omnis aliquid in dignissimos repellendus rem ratione
          dolorum vel! Aliquam recusandae adipisci excepturi. Itaque nisi
          reiciendis hic quis maiores a unde animi exercitationem debitis.
          Obcaecati corrupti, quam velit consequatur maxime excepturi corporis,
          natus incidunt delectus quo, ut repellat ea itaque autem id? Placeat
          quas repellendus aliquam! Voluptas eum odio provident? Unde tenetur
          quod officia ipsum delectus libero sapiente? A unde velit eligendi
          excepturi aut dolorem eius quos quas voluptas labore ea facere nihil
          deserunt accusantium dolore, neque impedit sapiente blanditiis
          aspernatur aliquam. Quisquam suscipit odit saepe ipsa est! Facere
          labore, quod enim dolorum eveniet, eos consequuntur laudantium
          recusandae similique pariatur sapiente debitis. Reiciendis ipsa, neque
          officia reprehenderit rem labore id! Ea, repellendus. Nesciunt
          explicabo aspernatur libero maxime quia nulla dolorum eos omnis iusto,
          tenetur, dignissimos facere aliquam, porro fugiat eligendi nam error
          ea accusamus! Hic, libero dolor, ab alias aliquid non sed repudiandae
          voluptatibus delectus possimus molestiae? Quae exercitationem nihil
          architecto, tempora quas optio corrupti odit esse labore. Sed iste
          consequuntur at atque impedit optio magni incidunt soluta itaque
          maiores harum reiciendis qui nemo velit illo magnam, temporibus
          tempora nihil. Repellat recusandae, sint magnam assumenda tempore
          officiis quia hic eaque eveniet exercitationem quo placeat, impedit
          sapiente aspernatur minima quos deserunt dolor debitis. Reiciendis
          porro itaque aperiam?
        </section>
      </main>
    </>
  );
};

export default ScrollDown;
