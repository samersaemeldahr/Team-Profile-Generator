function mainHTML(answers) {
    `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>

<body>

    <div class="jumbotron text-center bg-danger">
        <h1>My Team</h1>
    </div>

    <div class="container d-flex flex-wrap justify-content-center">
        
    </div>

</body>

</html>
`
}

function managerTemplate() {
    `
    <div class="card border-dark m-3">
            <div class="card-header bg-primary header-color" style="font-size: 20px; font-weight: bold;">Header<br><span
                    class="fas fa-user-tie"> Manager</span></div>
            <div class="card-body text-dark">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: </li>
                    <li class="list-group-item">Office number: </li>
                </ul>
            </div>
        </div>
        `
}

function engineerTemplate() {
    `
    <div class="card border-dark m-3">
            <div class="card-header bg-primary header-color" style="font-size: 20px; font-weight: bold;">Header<br><span
                    class="fas fa-user-cog"> Engineer</span></div>
            <div class="card-body text-dark">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: </li>
                    <li class="list-group-item">GitHub: </li>
                </ul>
            </div>
        </div>
        `
}

function internTemplate() {
    `<div class="card border-dark m-3">
    <div class="card-header bg-primary header-color" style="font-size: 20px; font-weight: bold;">Header<br><span
            class="fas fa-user-graduate"> Intern</span></div>
    <div class="card-body text-dark">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">School: </li>
        </ul>
    </div>
</div>
`
}

function cssTemplate() {
    `* {
        box-sizing: border-box;
    }
    
    .jumbotron {
        color: mintcream;
        padding: 4% 0 4% 0;
    };
    
    .header-color {
        color: mintcream;
    }
    
    .card {
        color: mintcream;
        width: 14rem;
        max-width: 28rem;
    }
    
    .container {
        display: flexbox;
    }
    
    @media screen and (max-width: 768px) {
        .card {
            width: unset;
            max-width: unset;
        }
    }
    
    @media screen and (max-width: 768px) {
        .container {
          display: block;
          flex-direction: column;
        }
    }
    `

}



