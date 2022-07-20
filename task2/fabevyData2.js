
var h1 = document.createElement('h1');
h1.textContent='SOLUTION 2'
document.body.append(h1)


var fabevyStudents = [{

    Photo: '1.jpg',
    name: "rahul",
    mobile_no: 7010068320,
    Batch: "FSD 10",
    Referredby: 'vel',
    Git: 'https://github.com/rahulmahi?tab=repositories',
    location: 'tenkasi',
    PlacementStatus: 'Not Started'
},
{
    Photo: '1.jpg',
    name: "muthukumar",
    mobile_no: 6374280764,
    Batch: "FSD 10",
    Referredby: 'rahul',
    Git: 'https://github.com/rahulmahi?tab=repositories',
    location: 'muppuliyoor',
    PlacementStatus: 'Not Started'
},
{
    Photo: '1.jpg',
    name: "chithirai vel",
    mobile_no: 8682039296,
    Batch: "FSD 10",
    Referredby: 'mani',
    Git: 'https://github.com/chithiraivel?tab=repositories',
    location: 'vembar',
    PlacementStatus: 'Not Started'
},
{
    Photo: '1.jpg',
    name: "manikandan",
    mobile_no: 8838301995,
    Batch: "FSD 10",
    Referredby: 'rahul',
    Git: 'https://github.com/rahulmahi?tab=repositories',
    location: 'pk valasai',
    PlacementStatus: 'Not Started'
},
];

function student() {
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var arr = ['Photo', 'Name', 'mobile', 'Batch', 'Referredby', "Git", 'location', 'PlacementStatus']
    for (let i = 0; i < arr.length; i++) {
        var th = document.createElement('th');
        th.textContent = arr[i];
        tr.append(th);
        table.append(tr);
    }
    for (let i = 0; i < fabevyStudents.length; i++) {

        var td = document.createElement('tr');

        var photo_no = document.createElement('td');
        var image = document.createElement('img');
        image.className = 'one'
        image.src = fabevyStudents[i].Photo;
        photo_no.append(image)

        var name_no = document.createElement('td');
        name_no.textContent = fabevyStudents[i].name;

        var ph_no = document.createElement('td');
        ph_no.textContent = fabevyStudents[i].mobile_no;

        var batch_no = document.createElement('td');
        batch_no.textContent = fabevyStudents[i].Batch;

        var Refered_no = document.createElement('td');
        Refered_no.textContent = fabevyStudents[i].Referredby;

        var git_no = document.createElement('td');
        var a1 = document.createElement('a')
        a1.href = fabevyStudents[i].Git;
        a1.textContent = fabevyStudents[i].Git;
        git_no.append(a1)

        var location_no = document.createElement('td');
        location_no.textContent = fabevyStudents[i].location;

        var place_no = document.createElement('td');
        place_no.textContent = fabevyStudents[i].PlacementStatus;

        td.append(photo_no, name_no, ph_no, batch_no, Refered_no, git_no, location_no, place_no);
        table.append(td)

        document.body.append(table);

    }
}
student();