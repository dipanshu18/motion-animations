import { motion, useScroll } from "motion/react";

export function ScrollBasedAnimation() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <div className="">
        <motion.div
          className="sticky top-0 w-full h-2 bg-rose-300 origin-left"
          style={{
            scaleX: scrollYProgress,
          }}
        />
        <div className="px-5">
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi
            doloribus natus explicabo et distinctio facilis iusto perferendis
            modi odit? Consequuntur distinctio voluptatem ea numquam quia animi
            dolor eveniet ratione ducimus unde earum, et similique. Nobis, qui
            unde possimus similique tenetur in fuga necessitatibus minus laborum
            cumque sint saepe deserunt voluptates voluptatibus maiores animi
            totam. Nisi mollitia, reiciendis molestiae eaque illo voluptate
            aliquid obcaecati est, fugit quaerat id. Vitae temporibus unde
            corporis? Quas nobis ad, ex pariatur aperiam nihil, sapiente iusto
            omnis sed reiciendis debitis a laboriosam provident quo similique!
            Animi et, illum iusto deleniti tempore vero voluptas eveniet
            commodi.
          </p>
          <p className="my-5">
            Quisquam repudiandae eaque ullam, numquam temporibus aut saepe
            perferendis delectus enim, odio minima dicta. Eligendi eveniet
            voluptatibus quia dolorem enim tempora veritatis sunt fuga quaerat
            provident inventore, rem itaque iste explicabo vel eius officiis
            temporibus commodi. Ipsam quasi, ducimus commodi vel dignissimos
            placeat dolorum beatae unde nisi voluptas iure eos debitis itaque
            omnis quisquam ad adipisci voluptatem. Natus dolor eius, quos neque
            quasi eaque iure laboriosam cum? Recusandae, rem harum! Sapiente ex,
            corrupti ipsam unde minus quo maiores natus culpa facilis libero aut
            vel labore placeat architecto fuga repellat quod dolorum nisi, est
            at eos delectus non. Non, perspiciatis odio!
          </p>
          <p className="my-5">
            Soluta, totam! Voluptatem ratione deserunt optio hic est, blanditiis
            molestias magnam doloremque sunt saepe? Doloremque, dolor delectus
            nemo aliquam modi corrupti. Rerum dolor debitis expedita dolorum
            possimus voluptatum, eius, dicta ut illum minus reiciendis porro
            repellat cum laudantium quaerat accusamus sit. Incidunt qui eos
            quasi rem neque blanditiis nulla earum deleniti dignissimos enim,
            impedit rerum facilis? Minima soluta eum, animi nostrum pariatur
            impedit odio reiciendis placeat enim incidunt iste distinctio.
            Similique aperiam nulla libero maxime placeat quam cum provident
            asperiores voluptas facere dolores voluptatum porro, ratione soluta
            dolorem corporis officiis eius at corrupti laborum mollitia
            consequuntur iusto! Minus, eaque explicabo?
          </p>
          <p className="my-5">
            Corporis, architecto quod perspiciatis natus odio cupiditate eum,
            cum quia id vel ab aperiam! Mollitia fugit non itaque, nisi possimus
            delectus vero reiciendis, cumque reprehenderit, assumenda debitis id
            amet dolorem sunt magni aperiam sint minus numquam dignissimos nihil
            in libero! Quo cum blanditiis laborum, dolorum voluptate assumenda
            illo molestiae laboriosam mollitia impedit culpa deserunt id
            excepturi enim veniam eveniet fugit laudantium. Ad perferendis
            ducimus, earum dolores rem tempore nisi architecto reprehenderit
            error placeat delectus, dolore autem! Ullam repudiandae recusandae
            eos eligendi ad velit nisi, unde distinctio? Perferendis commodi
            corrupti inventore voluptatibus, praesentium, maiores minus incidunt
            atque facere tempore aperiam nobis.
          </p>
          <p className="my-5">
            Quisquam repudiandae eaque ullam, numquam temporibus aut saepe
            perferendis delectus enim, odio minima dicta. Eligendi eveniet
            voluptatibus quia dolorem enim tempora veritatis sunt fuga quaerat
            provident inventore, rem itaque iste explicabo vel eius officiis
            temporibus commodi. Ipsam quasi, ducimus commodi vel dignissimos
            placeat dolorum beatae unde nisi voluptas iure eos debitis itaque
            omnis quisquam ad adipisci voluptatem. Natus dolor eius, quos neque
            quasi eaque iure laboriosam cum? Recusandae, rem harum! Sapiente ex,
            corrupti ipsam unde minus quo maiores natus culpa facilis libero aut
            vel labore placeat architecto fuga repellat quod dolorum nisi, est
            at eos delectus non. Non, perspiciatis odio!
          </p>
          <p className="my-5">
            Soluta, totam! Voluptatem ratione deserunt optio hic est, blanditiis
            molestias magnam doloremque sunt saepe? Doloremque, dolor delectus
            nemo aliquam modi corrupti. Rerum dolor debitis expedita dolorum
            possimus voluptatum, eius, dicta ut illum minus reiciendis porro
            repellat cum laudantium quaerat accusamus sit. Incidunt qui eos
            quasi rem neque blanditiis nulla earum deleniti dignissimos enim,
            impedit rerum facilis? Minima soluta eum, animi nostrum pariatur
            impedit odio reiciendis placeat enim incidunt iste distinctio.
            Similique aperiam nulla libero maxime placeat quam cum provident
            asperiores voluptas facere dolores voluptatum porro, ratione soluta
            dolorem corporis officiis eius at corrupti laborum mollitia
            consequuntur iusto! Minus, eaque explicabo?
          </p>
          <p className="my-5">
            Corporis, architecto quod perspiciatis natus odio cupiditate eum,
            cum quia id vel ab aperiam! Mollitia fugit non itaque, nisi possimus
            delectus vero reiciendis, cumque reprehenderit, assumenda debitis id
            amet dolorem sunt magni aperiam sint minus numquam dignissimos nihil
            in libero! Quo cum blanditiis laborum, dolorum voluptate assumenda
            illo molestiae laboriosam mollitia impedit culpa deserunt id
            excepturi enim veniam eveniet fugit laudantium. Ad perferendis
            ducimus, earum dolores rem tempore nisi architecto reprehenderit
            error placeat delectus, dolore autem! Ullam repudiandae recusandae
            eos eligendi ad velit nisi, unde distinctio? Perferendis commodi
            corrupti inventore voluptatibus, praesentium, maiores minus incidunt
            atque facere tempore aperiam nobis.
          </p>
          <p className="my-5">
            Quisquam repudiandae eaque ullam, numquam temporibus aut saepe
            perferendis delectus enim, odio minima dicta. Eligendi eveniet
            voluptatibus quia dolorem enim tempora veritatis sunt fuga quaerat
            provident inventore, rem itaque iste explicabo vel eius officiis
            temporibus commodi. Ipsam quasi, ducimus commodi vel dignissimos
            placeat dolorum beatae unde nisi voluptas iure eos debitis itaque
            omnis quisquam ad adipisci voluptatem. Natus dolor eius, quos neque
            quasi eaque iure laboriosam cum? Recusandae, rem harum! Sapiente ex,
            corrupti ipsam unde minus quo maiores natus culpa facilis libero aut
            vel labore placeat architecto fuga repellat quod dolorum nisi, est
            at eos delectus non. Non, perspiciatis odio!
          </p>
          <p className="my-5">
            Soluta, totam! Voluptatem ratione deserunt optio hic est, blanditiis
            molestias magnam doloremque sunt saepe? Doloremque, dolor delectus
            nemo aliquam modi corrupti. Rerum dolor debitis expedita dolorum
            possimus voluptatum, eius, dicta ut illum minus reiciendis porro
            repellat cum laudantium quaerat accusamus sit. Incidunt qui eos
            quasi rem neque blanditiis nulla earum deleniti dignissimos enim,
            impedit rerum facilis? Minima soluta eum, animi nostrum pariatur
            impedit odio reiciendis placeat enim incidunt iste distinctio.
            Similique aperiam nulla libero maxime placeat quam cum provident
            asperiores voluptas facere dolores voluptatum porro, ratione soluta
            dolorem corporis officiis eius at corrupti laborum mollitia
            consequuntur iusto! Minus, eaque explicabo?
          </p>
          <p className="my-5">
            Corporis, architecto quod perspiciatis natus odio cupiditate eum,
            cum quia id vel ab aperiam! Mollitia fugit non itaque, nisi possimus
            delectus vero reiciendis, cumque reprehenderit, assumenda debitis id
            amet dolorem sunt magni aperiam sint minus numquam dignissimos nihil
            in libero! Quo cum blanditiis laborum, dolorum voluptate assumenda
            illo molestiae laboriosam mollitia impedit culpa deserunt id
            excepturi enim veniam eveniet fugit laudantium. Ad perferendis
            ducimus, earum dolores rem tempore nisi architecto reprehenderit
            error placeat delectus, dolore autem! Ullam repudiandae recusandae
            eos eligendi ad velit nisi, unde distinctio? Perferendis commodi
            corrupti inventore voluptatibus, praesentium, maiores minus incidunt
            atque facere tempore aperiam nobis.
          </p>
          <p className="my-5">
            Quisquam repudiandae eaque ullam, numquam temporibus aut saepe
            perferendis delectus enim, odio minima dicta. Eligendi eveniet
            voluptatibus quia dolorem enim tempora veritatis sunt fuga quaerat
            provident inventore, rem itaque iste explicabo vel eius officiis
            temporibus commodi. Ipsam quasi, ducimus commodi vel dignissimos
            placeat dolorum beatae unde nisi voluptas iure eos debitis itaque
            omnis quisquam ad adipisci voluptatem. Natus dolor eius, quos neque
            quasi eaque iure laboriosam cum? Recusandae, rem harum! Sapiente ex,
            corrupti ipsam unde minus quo maiores natus culpa facilis libero aut
            vel labore placeat architecto fuga repellat quod dolorum nisi, est
            at eos delectus non. Non, perspiciatis odio!
          </p>
          <p className="my-5">
            Soluta, totam! Voluptatem ratione deserunt optio hic est, blanditiis
            molestias magnam doloremque sunt saepe? Doloremque, dolor delectus
            nemo aliquam modi corrupti. Rerum dolor debitis expedita dolorum
            possimus voluptatum, eius, dicta ut illum minus reiciendis porro
            repellat cum laudantium quaerat accusamus sit. Incidunt qui eos
            quasi rem neque blanditiis nulla earum deleniti dignissimos enim,
            impedit rerum facilis? Minima soluta eum, animi nostrum pariatur
            impedit odio reiciendis placeat enim incidunt iste distinctio.
            Similique aperiam nulla libero maxime placeat quam cum provident
            asperiores voluptas facere dolores voluptatum porro, ratione soluta
            dolorem corporis officiis eius at corrupti laborum mollitia
            consequuntur iusto! Minus, eaque explicabo?
          </p>
          <p className="my-5">
            Corporis, architecto quod perspiciatis natus odio cupiditate eum,
            cum quia id vel ab aperiam! Mollitia fugit non itaque, nisi possimus
            delectus vero reiciendis, cumque reprehenderit, assumenda debitis id
            amet dolorem sunt magni aperiam sint minus numquam dignissimos nihil
            in libero! Quo cum blanditiis laborum, dolorum voluptate assumenda
            illo molestiae laboriosam mollitia impedit culpa deserunt id
            excepturi enim veniam eveniet fugit laudantium. Ad perferendis
            ducimus, earum dolores rem tempore nisi architecto reprehenderit
            error placeat delectus, dolore autem! Ullam repudiandae recusandae
            eos eligendi ad velit nisi, unde distinctio? Perferendis commodi
            corrupti inventore voluptatibus, praesentium, maiores minus incidunt
            atque facere tempore aperiam nobis.
          </p>
          <p className="my-5">
            Quisquam repudiandae eaque ullam, numquam temporibus aut saepe
            perferendis delectus enim, odio minima dicta. Eligendi eveniet
            voluptatibus quia dolorem enim tempora veritatis sunt fuga quaerat
            provident inventore, rem itaque iste explicabo vel eius officiis
            temporibus commodi. Ipsam quasi, ducimus commodi vel dignissimos
            placeat dolorum beatae unde nisi voluptas iure eos debitis itaque
            omnis quisquam ad adipisci voluptatem. Natus dolor eius, quos neque
            quasi eaque iure laboriosam cum? Recusandae, rem harum! Sapiente ex,
            corrupti ipsam unde minus quo maiores natus culpa facilis libero aut
            vel labore placeat architecto fuga repellat quod dolorum nisi, est
            at eos delectus non. Non, perspiciatis odio!
          </p>
          <p className="my-5">
            Soluta, totam! Voluptatem ratione deserunt optio hic est, blanditiis
            molestias magnam doloremque sunt saepe? Doloremque, dolor delectus
            nemo aliquam modi corrupti. Rerum dolor debitis expedita dolorum
            possimus voluptatum, eius, dicta ut illum minus reiciendis porro
            repellat cum laudantium quaerat accusamus sit. Incidunt qui eos
            quasi rem neque blanditiis nulla earum deleniti dignissimos enim,
            impedit rerum facilis? Minima soluta eum, animi nostrum pariatur
            impedit odio reiciendis placeat enim incidunt iste distinctio.
            Similique aperiam nulla libero maxime placeat quam cum provident
            asperiores voluptas facere dolores voluptatum porro, ratione soluta
            dolorem corporis officiis eius at corrupti laborum mollitia
            consequuntur iusto! Minus, eaque explicabo?
          </p>
          <p className="my-5">
            Corporis, architecto quod perspiciatis natus odio cupiditate eum,
            cum quia id vel ab aperiam! Mollitia fugit non itaque, nisi possimus
            delectus vero reiciendis, cumque reprehenderit, assumenda debitis id
            amet dolorem sunt magni aperiam sint minus numquam dignissimos nihil
            in libero! Quo cum blanditiis laborum, dolorum voluptate assumenda
            illo molestiae laboriosam mollitia impedit culpa deserunt id
            excepturi enim veniam eveniet fugit laudantium. Ad perferendis
            ducimus, earum dolores rem tempore nisi architecto reprehenderit
            error placeat delectus, dolore autem! Ullam repudiandae recusandae
            eos eligendi ad velit nisi, unde distinctio? Perferendis commodi
            corrupti inventore voluptatibus, praesentium, maiores minus incidunt
            atque facere tempore aperiam nobis.
          </p>
          <p className="my-5">
            Quisquam repudiandae eaque ullam, numquam temporibus aut saepe
            perferendis delectus enim, odio minima dicta. Eligendi eveniet
            voluptatibus quia dolorem enim tempora veritatis sunt fuga quaerat
            provident inventore, rem itaque iste explicabo vel eius officiis
            temporibus commodi. Ipsam quasi, ducimus commodi vel dignissimos
            placeat dolorum beatae unde nisi voluptas iure eos debitis itaque
            omnis quisquam ad adipisci voluptatem. Natus dolor eius, quos neque
            quasi eaque iure laboriosam cum? Recusandae, rem harum! Sapiente ex,
            corrupti ipsam unde minus quo maiores natus culpa facilis libero aut
            vel labore placeat architecto fuga repellat quod dolorum nisi, est
            at eos delectus non. Non, perspiciatis odio!
          </p>
          <p className="my-5">
            Soluta, totam! Voluptatem ratione deserunt optio hic est, blanditiis
            molestias magnam doloremque sunt saepe? Doloremque, dolor delectus
            nemo aliquam modi corrupti. Rerum dolor debitis expedita dolorum
            possimus voluptatum, eius, dicta ut illum minus reiciendis porro
            repellat cum laudantium quaerat accusamus sit. Incidunt qui eos
            quasi rem neque blanditiis nulla earum deleniti dignissimos enim,
            impedit rerum facilis? Minima soluta eum, animi nostrum pariatur
            impedit odio reiciendis placeat enim incidunt iste distinctio.
            Similique aperiam nulla libero maxime placeat quam cum provident
            asperiores voluptas facere dolores voluptatum porro, ratione soluta
            dolorem corporis officiis eius at corrupti laborum mollitia
            consequuntur iusto! Minus, eaque explicabo?
          </p>
          <p className="my-5">
            Corporis, architecto quod perspiciatis natus odio cupiditate eum,
            cum quia id vel ab aperiam! Mollitia fugit non itaque, nisi possimus
            delectus vero reiciendis, cumque reprehenderit, assumenda debitis id
            amet dolorem sunt magni aperiam sint minus numquam dignissimos nihil
            in libero! Quo cum blanditiis laborum, dolorum voluptate assumenda
            illo molestiae laboriosam mollitia impedit culpa deserunt id
            excepturi enim veniam eveniet fugit laudantium. Ad perferendis
            ducimus, earum dolores rem tempore nisi architecto reprehenderit
            error placeat delectus, dolore autem! Ullam repudiandae recusandae
            eos eligendi ad velit nisi, unde distinctio? Perferendis commodi
            corrupti inventore voluptatibus, praesentium, maiores minus incidunt
            atque facere tempore aperiam nobis.
          </p>
          <p className="my-5">
            Eos ipsa alias beatae ea incidunt, repellat minus enim excepturi,
            deleniti commodi ab quia! Consequatur recusandae, consectetur minima
            beatae cumque debitis corporis cum at nostrum tempora quod odio hic
            officiis magnam reprehenderit, deleniti vero numquam. Ipsum
            architecto praesentium quaerat vitae velit ut eos autem eaque,
            quidem eveniet illo. Non, vitae. Ipsum, perspiciatis, molestias quod
            voluptatum saepe ad, repellendus vitae temporibus asperiores amet
            tenetur minus doloribus expedita beatae voluptate quas minima
            pariatur reprehenderit est explicabo officia consequatur deserunt.
            Quia eum repellat ipsum tenetur voluptatem sunt sapiente
            reprehenderit provident voluptates dolor quaerat nesciunt quam
            consequuntur porro labore, rerum aliquid non odit eos.
          </p>
          <p className="my-5">
            Cupiditate, mollitia asperiores, itaque, earum atque harum minima
            fugiat sit repellendus libero dolorum impedit quam voluptate iusto
            animi placeat voluptatem autem enim id vero deleniti. Cupiditate
            odit eum, nihil impedit porro dolorem facilis aut ducimus voluptas,
            assumenda pariatur voluptate vero magnam neque corporis quaerat
            laborum, quod itaque officia. Quisquam totam nihil, asperiores
            consectetur eos est provident, repellendus deserunt tempore
            quibusdam maxime? Aspernatur dolore voluptatem beatae. Itaque
            nostrum laborum enim quia numquam ducimus nulla iure! Vel magni sint
            beatae cupiditate tempora enim obcaecati saepe provident voluptates,
            consequatur vitae dolore. Iure, adipisci eius. Numquam quis maxime
            adipisci amet! Accusamus provident ea consequatur!
          </p>
          <p className="my-5">
            Distinctio iure culpa error fugit cum, quos adipisci repellat,
            officiis quaerat consequatur perferendis. Hic, saepe. A, soluta.
            Earum necessitatibus inventore libero, eius soluta beatae, veniam
            sunt error expedita officiis ducimus aliquid vero officia
            exercitationem. Magnam sint odio, nulla, suscipit molestias
            molestiae illo pariatur nemo illum consequuntur veritatis non id
            dolores. Animi assumenda amet nesciunt dolore inventore rerum, modi
            id autem eligendi fuga odit quam quis iste vel magni nam facilis at
            a expedita culpa neque. Iste laboriosam atque tempore et aspernatur
            eius, alias mollitia laborum reprehenderit eligendi quibusdam ex non
            fugiat minima ut adipisci commodi amet illum reiciendis magnam sunt?
          </p>
          <p className="my-5">
            Soluta suscipit neque ipsum fuga minima id officia laborum ducimus
            nobis quidem commodi, molestiae nesciunt quas provident, aperiam
            modi? Dolores obcaecati quam molestiae iure, ab ratione facere eos
            autem! Expedita asperiores ratione, quod ad cumque sapiente
            quibusdam deleniti nisi incidunt, magnam beatae repudiandae error
            eos dicta obcaecati nesciunt vitae ipsa qui eveniet facilis deserunt
            repellendus aspernatur. Veniam iure consectetur odit voluptate
            aspernatur reprehenderit quaerat a distinctio laboriosam,
            repellendus, corrupti ea facilis asperiores, tenetur ad sequi nemo
            vitae! Est, possimus! Totam, unde, labore excepturi possimus facere
            placeat voluptatum debitis nesciunt quod architecto praesentium nemo
            cupiditate. Quae maxime accusamus repudiandae deleniti iusto?
          </p>
          <p className="my-5">
            Alias ipsa doloremque cum numquam hic iure nemo ipsam provident illo
            pariatur. Consequatur doloremque ipsam nesciunt aspernatur dolor
            sunt, cumque voluptate quidem maxime voluptatem maiores quaerat quas
            alias dolorum vitae accusantium ratione eligendi nobis quisquam
            similique earum mollitia sed ullam? Natus aut possimus iste quod,
            sint aliquid nihil consectetur, provident omnis maxime maiores
            reiciendis. Modi mollitia, ut dolore, quasi excepturi consequuntur
            facere cumque suscipit enim laboriosam sunt nihil ipsam aliquid, sit
            voluptates! Distinctio qui debitis tempora veniam? Dolore quos sit
            tempore odit asperiores molestias cumque animi magni veniam quod
            nesciunt, qui eos illo corporis aliquid laudantium numquam. Ad, ea
            molestias.
          </p>
          <p className="my-5">
            Accusantium, cumque rerum? Excepturi molestias molestiae voluptates
            accusantium quis eligendi temporibus distinctio doloribus? Tenetur
            facere veritatis temporibus quia ipsum expedita repellendus
            praesentium fugiat repellat quasi dolorem porro possimus commodi ex
            eius voluptates minus ipsam, accusantium, nemo officiis! Architecto
            officia hic assumenda explicabo corporis! Modi explicabo praesentium
            unde iusto distinctio consequatur. Esse suscipit, harum perspiciatis
            ab sint nam, facere velit possimus, sapiente deserunt doloribus
            voluptatibus nobis unde dignissimos veritatis expedita accusamus
            eum? Nam nostrum ratione rem aut quo doloribus exercitationem modi,
            vero quibusdam quisquam fuga similique ea, soluta molestias? Dolorem
            voluptatum dolores voluptatibus, consequuntur saepe error sit iste
            nulla eius nobis?
          </p>
        </div>
      </div>
    </div>
  );
}
