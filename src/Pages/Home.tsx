import { motion } from 'framer-motion';
import Hero from "../components/Hero";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Card2 from "../components/Card2";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="my-20">
        <motion.h1
          className="my-20 text-3xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          แนะนำสำหรับคุณ
        </motion.h1>
        <Card />
      </div>
      <div className="my-20">
        <motion.h1
          className="my-20 text-3xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          สินค้าขายดี
        </motion.h1>
        <Carousel />
      </div>
      <div className="my-20">
        <motion.h1
          className="my-20 text-3xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          เมนู ข้าวแนะนำ
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-4" id="order">
          <motion.div
            className="flex-item"
            initial={{ opacity: 0, y: -50 }} // เริ่มจากเลื่อนขึ้น
            whileInView={{ opacity: 1, y: 0 }} // เคลื่อนไหวเมื่อเห็นใน viewport
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }} // ให้อนิเมชั่นทำงานเพียงครั้งเดียวเมื่อเข้า viewport
          >
            <Card2
              Image="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/445464165_973597611440496_2355585923311186455_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHzoCiSRRtW2JJ1n9T7QpbpKfPwbgWX_n8p8_BuBZf-f6g6H6-NUMEK-wWR4e4rgw_bHqLPofKZHH-XJ7A348u7&_nc_ohc=aXDjY1wjQN8Q7kNvgGAcUml&_nc_oc=AdlKqTqVlY9yRh6ReYn-DvoZq5ZCCgSVBjpYkYCzpkMUfSFE4VOG38bR4SLEp1OJU5I&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=3Th7mXyoBUoJ5ayzfiGDWg&oh=00_AYGb4UlkWtRKS54mjTdAB9YsCNLr84NK4hDRnwLKjDC4HQ&oe=67E06B9E"
              name="กะเพราหมูสับ ไข่ข้นราดข้าว"
              price={65}
              p="กะเพราหมูสับ ไข่ข้นราดข้าว อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง"
              options={[
                { label: "พิเศษ", price: 20 },
                { label: "ธรรมดา", price: 0 }
              ]}
              mores={[
                { label: "หมูสับ", price: 0 },
                { label: "หมูกรอบ", price: 0 },
                { label: "ไก่", price: 0 },
                { label: "เนื้อ", price: 20 },
                { label: "กุ้ง", price: 10 },
                { label: "หมา", price: 100 }
              ]}
            />
          </motion.div>

          <motion.div
            className="flex-item"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card2
              Image="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/445544602_973597604773830_8417991626411313116_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHphSMR4VCTPed4UQiNAaz57V_59EJ3OCDtX_n0Qnc4IO2JnGX0WHyWnQ6OO_8AYtoD6yK9yBOahxhQ-SYwpx8P&_nc_ohc=gt9HUU65kGkQ7kNvgEnlAoK&_nc_oc=AdlLTbo7FS_0gFDmBdspM1eCSRVq54fqrcpXLN6gHoVxEcIAiIkq4sfvvNuqW6cY8Ss&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=HEyqpHg3-hL2jo-fMLAVrA&oh=00_AYHUxK3aYyMRPC50KEKltP0H0g5RuD-Wt4Zk5yq7PPD06g&oe=67E09290"
              name="หมูคั่วกากเจียว"
              price={65}
              p="หมูคั่วกากเจียว อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง จัดเลยวันนี้"
              options={[
                { label: "พิเศษ", price: 20 },
                { label: "ธรรมดา", price: 0 }
              ]}
              mores={[
                { label: "หมูสับ", price: 0 },
                { label: "หมูกรอบ", price: 0 },
                { label: "ไก่", price: 0 },
                { label: "เนื้อ", price: 20 },
                { label: "กุ้ง", price: 10 }
              ]}
            />
          </motion.div>

          <motion.div
            className="flex-item"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card2
              Image="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/441932704_973597561440501_5994024219817889047_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHhOIigPsC5jLyFPfGhyxfxhEGRXidlLeyEQZFeJ2Ut7H1vmIsoLswpNovG2tYXrhQtaYlXUIlPexYsmSm4-CVr&_nc_ohc=7wbbVFC6UkoQ7kNvgF6byS9&_nc_oc=AdkB3vbJYLN1_nGvMjLayW8N_wCd73P4E4-w8ICyGUVaeXWHWBwx52M-tHhP28YSn_E&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=xDWzdPgRoNDuBrkCL0gyHA&oh=00_AYEzpP1ggXdUBsLts67BSxeJbPG_QAXEsfC_qTIY0LC8oQ&oe=67E0A479"
              name="มาม่าคั่วกะเพราหมูสับ พริกขี้หนูสวน"
              price={65}
              p="มาม่าคั่วกะเพราหมูสับ พริกขี้หนูสวน อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง"
              options={[
                { label: "พิเศษ", price: 20 },
                { label: "ธรรมดา", price: 0 }
              ]}
              mores={[
                { label: "หมูสับ", price: 0 },
                { label: "หมูกรอบ", price: 0 },
                { label: "ไก่", price: 0 },
                { label: "เนื้อ", price: 20 },
                { label: "กุ้ง", price: 10 }
              ]}
            />
          </motion.div>

          <motion.div
            className="flex-item"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card2
              Image="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/441931262_973597568107167_8809083280256356902_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGcZgqNZVw3gzFL9WVm_B6OC6EsjTU6JY4LoSyNNToltrBrsxTvZ8vvizEdfQpkAV75-x61pO0g5K9nTsiM0jG&_nc_ohc=swrpsvyYtVIQ7kNvgEFP3eZ&_nc_oc=AdkovcCspLEUMlD5Fp_0VHMAuW1osr1uETv3Ss7PByCN4xXOx-OemsTQ4ExUH_8z6sM&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=Csui0_7wkPZ2C5OwrWR2Jg&oh=00_AYFBTcnJlKsql9NhdM4fKWggu-XzFOMw_j5cNNELkt5z1w&oe=67E09941"
              name="สั่งเลย 2 จาน แถม 1 จาน"
              price={65}
              p="สั่งเลย 2 จาน แถม 1 จาน อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง"
              options={[
                { label: "พิเศษ", price: 20 },
                { label: "ธรรมดา", price: 0 }
              ]}
              mores={[
                { label: "หมูสับ", price: 0 },
                { label: "หมูกรอบ", price: 0 },
                { label: "ไก่", price: 0 },
                { label: "เนื้อ", price: 20 },
                { label: "กุ้ง", price: 10 }
              ]}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
