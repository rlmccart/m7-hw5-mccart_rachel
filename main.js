var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];
var scriptTag = document.getElementsByTagName('script')[0];
pageBody.insertBefore(main, scriptTag);

var header = document.createElement('h1');
main.appendChild(header);

var ul = document.createElement('ul');
main.appendChild(ul);

var myLi = document.createElement('myLi');
ul.appendChild(myLi);

var headerText = documnet.createTextNode('This is the header text!');
header.appendChild(headerText);

var listItemText = document.createTextNode('This is the list item');
myLi.appendChild(listItemText);

header.classList.add('style');

main.classList.add('text-center');

var link = document.createElement('a');

var linkListItem = document.createElement('li'); 

link.appendChild(linkListItem);
linkListItem.appendChild(ul);

var linkText = document.createTextNode('This is my link');
linkText.appendChild(link);

link.href = 'https://www.google.com';

var notLinkListItem = linkListItem.previousElementSibling;

notLinkListItem.classList.add('orange');