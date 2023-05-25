const bsccsitbook=[
    {
        id:00,
        image:'images/math.jpg',
        title:'Mathematics-I',
        writername:'James Stewa'
    },
    {
        id:01,
        image:'images/content.jpg',
        title:'Introduction to Technology',
        writername:'Peter Norton'
    },
    
    {
        id:02,
        image:'images/physics.jpg',
        title:'Physics',
        writername:'Narciso Garcia & Arthur Damask'
    },
    
    {
        id:03,
        image:'images/download.jpg',
        title:'C-Programming',
        writername:'Stephen-G Kochan'
    },
    
    {
        id:04,
        image:'images/digital.jpg',
        title:'Digital Logic',
        writername:'Morris Mano'
    },
    
]
const categories=[...new Set(bsccsitbook.map((item)=>{return item}))]
document.getElementById('searchbar').addEventListener('keyup',(e)=>{
    const searchData=e.target.value.toLowerCase();
    const filterData=categories.filter((item)=>{
        return (
            item.title.toLocaleLowerCase().includes(searchData)
        )
    }
    )
    displayItem(filterData)
});
const displayItem=(items)=>{
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {image,title,writername}=item;
        return(
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src='${image}'></img>

                </div>
                <div class="bottom">
<h3>${title}</h3>
<p>${writername}</p>
                </div>
            </div>
        )
    }).join('')
};
displayItem(categories);