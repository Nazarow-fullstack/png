const div=document.querySelector('.div');
let arrcard=[
    {
        img:"photo_2024-09-10_15-05-51.jpg",
        title:"Best of salzburg in venna",
        text:"They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit. Most geologists classify a mountain as a landform that rises at least 1,000 feet (300 meters) or more above its surrounding area. A mountain range isThey usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak ",

    },
    {
        img:"photo_2024-09-10_15-05-54.jpg",
        title:"PBest of roam in 7 Tour",
        text:"They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit. Most geologists classify a mountain as a landform that rises at least 1,000 feet (300 meters) or more above its surrounding area. A mountain range isThey usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak ",

    },
    {
        img:"photo_2024-09-10_15-12-18.jpg",
        title:"Best of Polann in the world",
        text:"They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit. Most geologists classify a mountain as a landform that rises at least 1,000 feet (300 meters) or more above its surrounding area. A mountain range isThey usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak ",

    }
]
function show() {
    arrcard.forEach((e,i)=> {
        let inn=document.createElement('div')
inn.style.display="flex"
inn.style.justifyContent="space-between"
inn.style.backgroundColor=e.color
inn.style.borderBottomLeftRadius="15px"
       inn.style.borderBottomRightRadius="15px"
        let inn2=document.createElement('div')
inn2.style.borderBottomLeftRadius="15px"
       inn2.style.borderBottomRightRadius="15px"
        let inn3=document.createElement('div')
 inn3.style.borderBottomLeftRadius="15px"
       inn3.style.borderBottomRightRadius="15px"
        let inn1=document.createElement('div')
        let card=document.createElement('div')
        card.style.boxShadow="7px 7px 10px black"
       card.classList.add(('card'+i))
       let image=document.createElement('img')

       let title=document.createElement('p')
       let text=document.createElement('p')
       let button=document.createElement("button")
       button.innerHTML="NO interested"
       button.style.padding="0px 30px"
       button.style.border="3px solid green "
       image.src=e.img
       image.style.width="100%"
       image.style.borderTopLeftRadius="15px"
       image.style.borderTopRightRadius="15px"
       title.innerHTML=e.title+"one"
       title.style.fontSize="30px"
       title.style.fontWeight="1000"
       text.innerHTML=e.text
       inn.append(inn1,inn2,inn3)
       card.append(image,title,text,inn,button)
       div.append(card)
    })
}
show()