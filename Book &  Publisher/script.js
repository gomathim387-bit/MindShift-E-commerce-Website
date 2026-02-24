const books = [
["To Kill a Mockingbird","₹399","1280px-To_Kill_a_Mockingbird.jpg","Classic","English","Harper Lee",true],
["Believe in Yourself","₹299","YourSelf.jpg","Self","English","Dr. Joseph Murphy",false],
["World Literature Stories","₹450","WL.jpg","Classic","English","Various Authors",false],
["Sila Nerangalil Sila Manithargal","₹350","SNSM.jpg","Novel","Tamil","Jayakanthan",true],
["Valayapathi","₹420","Valaiyapathi.jpg","Classic","Tamil","Unknown",false], // Author name historically unknown
["Panchatantra Tales","₹299","TP.jpg","Kids","English","Vishnu Sharma",true],
["Atomic Habits","₹499","AH.jpg","Self","English","James Clear",true],
["Chanakya Neeti","₹250","CN.webp","Philosophy","Hindi","Chanakya",true],
["The Kite Runner","₹399","TK.jpg","Novel","English","Khaled Hosseini",true],
["Three Men in a Boat","₹320","TI.jpg","Classic","English","Jerome K. Jerome",false],
["Godaan","₹260","Godaan.jpg","Family","Hindi","Munshi Premchand",true],
["Harry Potter","₹599","HP.jpg","Fantasy","English","J.K. Rowling",true],
["The Hobbit","₹520","The hobbit.webp","Fantasy","English","J.R.R. Tolkien",true],
["Things Fall Apart","₹340","TFA.webp","Classic","English","Chinua Achebe",true],
["A Grammar of Modern Telugu","₹480","Telungu Study3.jpg","Study","Telungu","Bhadriraju Krishnamurti",false],
["Tenali Raman Stories","₹300","Tenalli.webp","Kids","English","Various Authors",false],
["Ramayanam","₹650","Ramayanam.jpg","Epic","Tamil","Valmiki",true],
["Telugu Love Stories","₹85","Telungu Love.jpg","Love","Telungu","Various Authors",false],
["The Alchemist","₹399","TA.jpg","Self","English","Paulo Coelho",true],
["Rich Dad Poor Dad","₹450","RDPD.jpg","Finance","English","Robert Kiyosaki",true],
["Seevaka Sindhamani","₹380","seevagasindhamani.jpg","Classic","Tamil","Thiruthakkadevar",false],
["Telugu Vyakaranam","₹350","Telungu Study2.jpg","Study","Telungu","Chinnaya Suri",false],
["Amma","₹320","Telungu Family.jpg","Family","Telungu","Maxim Gorky",false], // Translation version
["The God of Small Things","₹75","Small Things.jpg","Novel","English","Arundhati Roy",true],
["Silappathikaram","₹500","Silapathigaram.jpg","Classic","Tamil","Ilango Adigal",true],
["Samskara","₹350","Samskara.webp","Classic","Kannada","U.R. Ananthamurthy",true],
["Rise","₹100","Rise.jpg","Self","English","Danny Gokey",false],
["Ravana","₹370","Ravana.jpg","Mythology","Hindi","Anand Neelakantan",false],
["Rashmirathi","₹390","Rashmirathi.jpg","Epic","Hindi","Ramdhari Singh Dinkar",true],
["Ponniyin Selvan","₹750","PP.jpg","History","Tamil","Kalki",true],
["Pothu Arivu Guide","₹260","Pothu Arivu.jpg","Study","Tamil","Sura Publications",false],
["Pataliputra History","₹310","pataliputra.jpg","History","Hindi","Dr. Manoj Kumar",false],
["The Other Love Story","₹300","Other love.jpg","Love","English","Roopa Rao",false],
["Oru Desathinte Katha","₹150","Oru Desathinte.jpg","Novel","Malayalam","S.K. Pottekkatt",true],
["Nirmala","₹320","Nirmala.jpg","Family","Hindi","Munshi Premchand",true],
["Neeyum Naanum","₹280","Neeyum Naanum.jpg","Love","Tamil","C. Gopinath",false],
["My Life","₹260","MY.jpg","Novel","English","Bill Clinton",false],
["Mahabharatam","₹600","MB.webp","Spiritual","Tamil","Vyasa",true],
["Manimegalai","₹420","Manimegalai.webp","Classic","Tamil","Sathanar",true],
["Malayalam Grammar","₹350","Malayalam study2.jpg","Study","Malayalam","Hermann Gundert",false],
["Sura’s PSC LDC Pariksha Sahayi","₹380","Malayalam study.jpg","Study","Malayalam","Sura Publications",false],
["Mahaprasthanam","₹320","Mahaprasatham.jpg","Spiritual","Telugu","Sri Sri",true],
["Little Women","₹399","LW.jpg","Classic","English","Louisa May Alcott",true],
["Randamoozham","₹480","Love Mal2.jpg","Novel","Malayalam","M.T. Vasudevan Nair",true],
["Maniyara","₹300","Love Mal.jpg","Love","Malayalam","M. Mukundan",false],
["Ikigai","₹450","Life.jpg","Self","English","Héctor García",true],
["Kundalakesi","₹420","Kundalakesi.jpg","Classic","Tamil","Nathakuthanaar",false],
["KAS Exam Guide","₹350","KAS.jpg","Study","Kannada","Dr. K.M. Suresh",false],
["Karukku","₹350","Karukku.jpg","Social","Tamil","Bama",true],
["Modern Kannada Grammar","₹380","Kannda Grammer.jpg","Study","Kannada","B.M. Srikantaiah",false],
["Mookajjiya Kanasugalu","₹420","Kannada Love2.jpg","Classic","Kannada","K. Shivaram Karanth",true],
["Ginnara Diggati","₹300","Kannada Love1.jpg","Love","Kannada","S.L. Bhyrappa",false],
["Me Before You","₹450","JM.jpg","Novel","English","Jojo Moyes",true],
["Tamil Kalanchiyam","₹350","ilayakiyam.jpg","Study","Tamil","P. Periyasamy Thooran",false],
["Malhar Hindi Guide","₹300","Hindi study1.jpg","Study","Hindi","Malhar Publications",false],
["Vishesh Hindi Vyakaran","₹320","HindiStudy2.jpg","Study","Hindi","Dr. Ashok Batra",false],
["Samanya Gyan","₹290","Hindistudy3.jpg","Study","Hindi","Lucent",false],
["The Power of Habit","₹499","Habbit.jpg","Self","English","Charles Duhigg",true],
["Objective General English","₹350","English.jpg","Study","English","S.P. Bakshi",true],
["Diary of a Wimpy Kid","₹399","Diary_of_a_Wimpy.jpg","Kids","English","Jeff Kinney",true],
["Curse of Shadows and Thorns","₹300","CST.jpg","Fantasy","English","L.J. Andrews",false],
["Sirippu Rajacholan","₹260","comedy.jpg","Comedy","Tamil","Baski",false],
["Nayi Prem Kahani","₹280","College Love.jpg","Love","Hindi","Premchand",false],
["Chetan Bhagat Collection","₹399","CB.jpg","Novel","English","Chetan Bhagat",true],
["Quantitative Aptitude","₹450","Apti.jpg","Study","English","R.S. Aggarwal",true],
["Amuktamalyada","₹420","Amu.jpg","Classic","Telungu","Krishnadevaraya",true],
["Amma Vandhal","₹350","Amma.jpg","Family","Tamil","T. Janakiraman",true],
["Gunahon Ka Devta", "₹350", "GKD.jpg", "Classic Fiction", "Hindi", "Dharamvir Bharati", true],
["Alaipayuthey Love Story","₹300","Alaipayuthe.jpg","Love","Tamil","Vairamuthu",false],
["Abhimanyu","₹320","Abimanyu.jpg","Mythology","Tamil","Chakravarthy",false],
["Wings of Fire","₹399","Abdulkalam.jpg","Biography","English","A.P.J. Abdul Kalam",true],
["Naa Prema Katha","₹329","Telungu Love2.jpg","Love","Telungu","Yandamoori Veerendranath",false],
["Telangana Economy","₹420","Telungu study1.jpg","Study","Telungu","Telugu Academy",false],
["Parthiban Kanavu","₹320","PK.jpg","Classic","Tamil","Kalki",true]
];

const searchInput = document.getElementById("search input");
const resultsBox = document.getElementById("search-results");

searchInput.addEventListener("input", function() {
    const val = this.value.toLowerCase().trim();
    resultsBox.innerHTML = ""; 

    if (val.length > 0) {
        const filtered = books.filter(book => book[0].toLowerCase().includes(val));

        if (filtered.length > 0) {
            resultsBox.style.display = "block"; 
            
            filtered.forEach(book => {
                const item = document.createElement("div");
                item.className = "suggestion-item";
                
                item.innerHTML = `
                    <img src="./img/${book[2]}">
                    <span>${book[0]} - ${book[1]}</span>
                `;

                item.onclick = () => {
                    window.location.href = `book.html?title=${encodeURIComponent(book[0])}&price=${book[1]}&img=${book[2]}`;
                };

                resultsBox.appendChild(item);
            });
        } else {
            resultsBox.style.display = "none";
        }
    } else {
        resultsBox.style.display = "none";
    }
});

document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
        resultsBox.style.display = "none";
    }
});

const container = document.querySelector(".image");

function showBooks(list){
    container.innerHTML = "";

    list.forEach(book => {
        const [title, price, img] = book;

        const div = document.createElement("div");
        div.classList.add("book");

        div.innerHTML = `
            <img src="./img/${img}" class="img" width="160" height="200">
            <span>${title}</span>
            <span>${price}</span>
        `;

        container.appendChild(div);
    });
}
showBooks(books);
const categoryLinks = document.querySelectorAll(".menu .list:nth-child(1) .dd");

categoryLinks.forEach(link => {

    link.addEventListener("click", function(e){
        e.preventDefault();

        const selectedCategory = this.textContent.trim();

        const filteredBooks = books.filter(book => 
            book[3].toLowerCase() === selectedCategory.toLowerCase()
        );

        showBooks(filteredBooks);
    });

});

const languageLinks = document.querySelectorAll(".menu .list:nth-child(2) .dd");

languageLinks.forEach(link => {

    link.addEventListener("click", function(e){
        e.preventDefault();

        const selectedLang = this.textContent.trim();

        const filteredBooks = books.filter(book => 
            book[4].toLowerCase() === selectedLang.toLowerCase()
        );

        if(filteredBooks.length === 0){
            container.innerHTML = "<h3>No books in this language</h3>";
            return;
        }

        showBooks(filteredBooks);
    });

});

const authorLinks = document.querySelectorAll(".menu .list:nth-child(3) .dd");

authorLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const selectedAuthor = this.textContent.trim();

        const filteredBooks = books.filter(book => 
            book[5].toLowerCase() === selectedAuthor.toLowerCase()
        );

        if(filteredBooks.length === 0){
            container.innerHTML = "<h3>No books by this author</h3>";
            return;
        }

        showBooks(filteredBooks);
    });
});
const popularLinks = document.querySelectorAll(".menu .list:nth-child(4) .dd");

popularLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const selectedBookName = this.textContent.trim().toLowerCase();

        const filteredBooks = books.filter(book => {
            return book[0].toLowerCase().includes(selectedBookName);
        });

        if(filteredBooks.length === 0){
            document.getElementById("container").innerHTML = "<h3>No books found!</h3>";
            return;
        }

        showBooks(filteredBooks);
    });
});

const priceLinks = document.querySelectorAll(".menu .list:nth-child(5) .dd");

priceLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const selectedPriceRange = this.textContent.trim();

        const filteredBooks = books.filter(book => {
            const price = parseInt(book[1].replace('₹', ''));

            if (selectedPriceRange === "Under ₹100") {
                return price < 100;
            } else if (selectedPriceRange === "₹100 – ₹200") {
                return price >= 100 && price <= 200;
            } else if (selectedPriceRange === "₹200 – ₹300") {
                return price >= 200 && price <= 300;
            } else if (selectedPriceRange === "₹300 – ₹500") {
                return price >= 300 && price <= 500;
            } else if (selectedPriceRange === "Above ₹500") {
                return price > 500;
            }
            return false;
        });

        if (filteredBooks.length === 0) {
            container.innerHTML = "<h3>No books found in this price range</h3>";
            return;
        }

        showBooks(filteredBooks);
    });
});

function showBooks(list){
    container.innerHTML = "";

    list.forEach(book => {
        const [title, price, img] = book;

        const div = document.createElement("div");
        div.classList.add("book");

        div.onclick = () => {
            window.location.href = `book.html?title=${encodeURIComponent(title)}&price=${price}&img=${img}`;
        };

        div.innerHTML = `
            <img src="./img/${img}" class="img" width="160" height="200">
            <span>${title}</span>
            <span>${price}</span>
        `;

        container.appendChild(div);
    });
}
const heartBtn = document.getElementById('likeBtn');

heartBtn.onclick = function() {
    this.classList.toggle('liked');
    
    if (this.classList.contains('liked')) {
        alert("Added to Wishlist! 💖");
    }
    
    this.style.transform = "scale(1.2)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 200);
};