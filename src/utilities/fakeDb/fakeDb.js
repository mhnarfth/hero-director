const getDb = () => {
    let playerObject = JSON.parse(localStorage.getItem('players'));

    return playerObject? playerObject: {};

}

const addToDb= (id) => {

    const playerObject = getDb();

    if (playerObject[id]){
        playerObject[id]++;
    }
    else{
        playerObject[id] = 1;
    }
    updateDb(playerObject);
}

const updateDb= (playerObject) => localStorage.setItem('players', JSON.stringify(playerObject));

const removeFromDb = (id) => {
    const playerObject = getDb();
    delete playerObject[id];
    updateDb(playerObject);
}
export {addToDb, removeFromDb};