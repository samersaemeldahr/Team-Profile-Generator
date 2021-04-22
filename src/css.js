const cssTemplate = function () {
    return `* {
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

module.exports = cssTemplate