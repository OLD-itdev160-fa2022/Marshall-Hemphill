(function() {

    var data = [
        {
            name: 'CSS Peek',
            description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
            author: 'by Pranay Prakash',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: 2308250,
            stars: 70,
            image: 'images/cssPeak.png',
            selector: 'pack1'
        },
        {
            name: 'Settings Sync',
            description: "The Settings Sync extension, previously known as Visual Studio Code Settings Sync, synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines. I think this is probably one of the most important and useful extensions that ensures no matter what computer you're on, you can have all the tooling you're used to.",
            author: 'by Shan Khan',
            url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
            downloads:  2769748,
            stars: 2776062,
            image: 'images/settingsSync.jpg',
            selector: 'pack2'
        }
    ];

    // Constructor
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.image = data.image;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString;
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString;
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authorEl = getEl(selector + '-author'),
            downloadsEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');
            imageEl = getEl(selector + '-image');

        nameEl.textContent = package.name;
        nameEl.setAttribute('href', package.url);
        nameEl.setAttribute('target', 'blank');
        descEl.textContent = package.description;
        authorEl.textContent = package.author;
        downloadsEl.textContent = 'Downloads: ' + package.downloads;
        starsEl.textContent = 'Stars: ' + package.stars;
        imageEl.setAttribute('src', package.image);
    }

    var dateEl = getEl('hero-date');
    dateEl.textContent = getTodaysDate();

    for (var i=0; i < data.length; i++) {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }

}());