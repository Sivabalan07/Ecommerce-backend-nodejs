class RandomString{
    static Generate(length=15){
        let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;

    }

    static GenerateWithBase64(){
        var data=this.Generate();
        return Buffer.from(data).toString('base64');
    }
}

module.exports=RandomString;