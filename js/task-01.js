const numberOfCategories = document.querySelectorAll(".item").length;
console.log("Number of categories:", numberOfCategories);

document.querySelectorAll(".item").forEach((element) => {
    const categoryName = element.firstElementChild.textContent;
    console.log("Category:", categoryName);

    const numberOfElements = element.querySelectorAll("li").length;
    console.log("Elements:", numberOfElements);

})