const setSecretFriends = (friendsList = []) => {
  let toReturn = {};

  let availableSecretFriends = [...friendsList];

  for (const friend in friendsList) {
    const secretFriendIndex = getSecretfriendIndex(friendsList[friend], availableSecretFriends);
    toReturn[friendsList[friend]] = availableSecretFriends[secretFriendIndex];
    availableSecretFriends.splice(secretFriendIndex, 1);
  }

  return toReturn;
};

const getSecretfriendIndex = (friend, availableFriends = []) => {
  const max = availableFriends.length - 1;
  const min = 0;
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  
  if (friend === availableFriends[random]) {
    return getSecretfriendIndex(friend, availableFriends);
  }

  return random;
};

module.exports = { setSecretFriends };
