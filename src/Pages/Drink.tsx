import React from 'react'
import Card2 from '../components/Card2'
const Drink = () => {
    return (
        <div>
            <div className="my-25">
                <h1 className="my-20 text-3xl font-bold text-center">น้ำรักพี่โชน</h1>
                <div className="flex className='flex flex-wrap justify-center gap-4" id="card2">
                    <Card2 Image="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/401632583_827275699406022_3228130372177816084_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGt2865xH5MGAtCT5XLjukEePPGb-LLsVl488Zv4suxWbsLqoORHDLajF6VsFWUi7k1PwvaZpZE0XtkOliSfLXo&_nc_ohc=tS_B8j2CjAUQ7kNvgF7U9g0&_nc_oc=Adnkw-HG0NM8AuDCFThZukAy_5TBop3vnSHZ33aKERXtNjJ_46hfRLE2n3ai7hkC8fo&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=bLGbH_OWo25pZ1oj9dvmEg&oh=00_AYGBfQ2txarGHwg22w_FEaWABY-6TmmA7DvJcQdBJbrAWA&oe=67E0A58B"
                        name="Black coffee lemon"
                        price={85}
                        p="real big black coffee lemon อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง"
                    />
                    <Card2 Image="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/399460691_827275659406026_3572005752415155278_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE_Ex84pz7AYsS1ZT9emUASYw509-ObpN9jDnT345uk35n6nyBUluYsk_Ff1Bb55io0trrYLSlAZxJhRwZjS6iG&_nc_ohc=n7nfUVN6v-AQ7kNvgELOqVa&_nc_oc=AdnQ3Ye9OnEDh3gz-QtatAOf0pKF5l2jYIzLdGg_a0iv-1szRh6m8r5Sq4A-slR96RI&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=HqQhP0GV6LJMPgKtjlFB4Q&oh=00_AYE3lMK8H6dQeUj_H0zMlPaSiM2dl16cMSXj5651Jd4abg&oe=67E0BB76"
                        name="Chockolate Mint"
                        price={75}
                        p="ชอคแลตมิ้น อร่อยๆ"
                    />
                    <Card2 Image="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/401533729_827275656072693_5439242235825767984_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeELSL9uky7aUa4UGTTdQFMrY6WK-CMIjQhjpYr4IwiNCHdo1WOf7QHDIUL949RWaxV6p4xKLs9TLV3gkGjdKel4&_nc_ohc=3ER5Am4a6KIQ7kNvgEJ9K3d&_nc_oc=AdlU6UrDRHd6lxmQfEhnrMqnITjTHnGd-v8R4NZ8Vgo3SNIVKLZNxXcZ_lUT7YJHyYM&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=2Z_MS0sG4YW_-DwdzMlDmQ&oh=00_AYGywR-uvOim3NQaIdSgFC6J2NfjyITARcXDIRFcLeKXjw&oe=67E0AA7A"
                        name="Green tea lemon"
                        price={85}
                        p="ชาเขียวสูตรเปรี้ยว"
                    />
                    <Card2 Image="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/401566462_827275706072688_1448853163812970869_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2lvXuZzknRP2PCO58vBOeiu90yKaLgCmK73TIpouAKbHcyLlvgiTOBGKJMhmeoNydHJ1YuA78xIKt03Q3kYKJ&_nc_ohc=6sc7V9nCp9QQ7kNvgHPiH8H&_nc_oc=AdngQshpWlc-Qf6YssWlCW9D_nE-8TAYjTMkQU9ClJ8rQKppMjRZBcXlGXhEZ4qjjQc&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=bZVMcs0_NbwmqivUPccu1A&oh=00_AYHs3xkyOQQflUDDRVmGh23wTHfHlabnKPHB6KDWS1sAUw&oe=67E0CD32"
                        name="red lemon tea"
                        price={50}
                        p="น้ำแดง ถวายศาล"
                    />
                </div>
            </div>
        </div>
    )
}

export default Drink
