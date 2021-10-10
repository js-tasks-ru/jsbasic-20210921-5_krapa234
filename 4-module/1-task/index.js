function makeFriendsList(friends) {
    let list = document.createElement('ul');

    friends.forEach(function(friend) {
        item = document.createElement('li');
        list.appendChild(item);
        item.innerHTML = `${friend.firstName} ${friend.lastName}`;

    });
    return list;
}
