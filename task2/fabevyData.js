var student = [
    {   
        Photo:'1.jpg',
        Name :"Chithirai vel",
        MobileNo:"8682039296",
        Batch:"FSD 10",
        Git :'https://github.com/chithiraivel',
        ReferredBy:'Rahul N',
        Location:'Thoothukudi',
        PlacementStatus:'Not Started'
    },
    {   
        Photo:'2.jpg',
        Name :"Rahul",
        MobileNo:"7010068320",
        Batch:"FSD 10",
        Git :'https://github.com/chithiraivel?tab=repositories',
        ReferredBy:'Madhan',
        Location:'Pullukattuvalasai',
        PlacementStatus:'Not Started'
    },
    {   
        Photo:'2.jpg',
        Name :"Muthu Kumar",
        MobileNo:"8374927478",
        Batch:"FSD 10",
        Git :'https://github.com/chithiraivel?tab=repositories',
        ReferredBy:'vel',
        Location:'muppuliuor',
        PlacementStatus:'Not Started'
    },
    {   
        Photo:'2.jpg',
        Name :"Leo Willson",
        MobileNo:"7635738353",
        Batch:"FSD 10",
        Git :'https://github.com/chithiraivel?tab=repositories',
        ReferredBy:'Velmurugan',
        Location:'surandai',
        PlacementStatus:'Not Started'
    },
    {   
        Photo:'2.jpg',
        Name :"Alphanse",
        MobileNo:"9273836465",
        Batch:"FSD 10",
        Git :'https://github.com/chithiraivel?tab=repositories',
        ReferredBy:'Velmurugan',
        Location:'Alangulam',
        PlacementStatus:'Not Started'
    },
    {   
        Photo:'2.jpg',
        Name :"Mari selvam",
        MobileNo:"9383848488",
        Batch:"FSD 10",
        Git :'https://github.com/chithiraivel?tab=repositories',
        ReferredBy:'Velmurugan',
        Location:'Alangulam',
        PlacementStatus:'Not Started'
    }
]

var table = document.createElement('table');
var tr = document.createElement('tr');
var th =document.createElement('th');
tr.append(th)
table.append(tr)
document.body.append(table)
console.log(table);

function information(data){

    var div = document.createElement('div');
    var span =document.createElement('span');
    div.append(span);
   
    span.innerHTML=`<table>

    <tr>
    <th>Photo</th>
    <th>Name</th>
    <th>MobileNo</th>
    <th>Batch</th>
    <th>Git</th>
    <th>ReferredBy</th>
    <th>Location</th>
    <th>PlacementStatus</th>
    </tr>


    <tr>
    <td><img src =${data.Photo} class='image'></td>
    <td>${data.Name}</td>
    <td>${data.MobileNo}</td>
    <td>${data.Batch}</td>
    <td><a href ={${data.Git}/blah}>${data.Git}</a></td>
    <td>${data.ReferredBy}</td>
    <td>${data.Location}</td>
    <td>${data.PlacementStatus}</td>
    </tr>
    </table>`
    document.body.append(span);
}
student.forEach(information)