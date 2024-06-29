function createUserProfiles(originalNames, modifiedNames){
    const profiles = [];
    
    for(let i = 0; i < originalNames.length; i ++){
        profiles.push({
            name: originalNames[i],
            modifiedName: modifiedNames[i],
            id: i + 1,
        })
    }
    return profiles;
}