export default function () {
    var xhr = new XMLHttpRequest();
    var data;

    xhr.open('GET', 'clients.json', false);
    xhr.send();

    if (xhr.status != 200) { 
        data = xhr.status + ': ' + xhr.statusText;
    } else {
        data = JSON.parse(xhr.responseText);
    }
    
    return data;
}
