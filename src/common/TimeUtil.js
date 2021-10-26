export default {
    format(date) {
        if(!date){
            return date;
        }
        //only using for date format: 2020-05-11T10:26:26.000+0000
        let tmp=date;
        if(typeof(date)==='string'){
            tmp=new Date(date);
        } 
        tmp.setUTCHours(tmp.getUTCHours()+9);
        let isoTmp = tmp.toISOString()
        
        return isoTmp.replace("Z","(UTC+9)");
        // return moment(String(date)).format('dddd')
    },
    formatgcp(date) {
        if(!date){
            return date;
        }
        //only using for date format: 2021-03-15 10:54:55 (UTC+9)
        let tmp=date;
        // if(typeof(date)==='string'){
        //     tmp = new Date(date);
        // }
        // tmp.setUTCHours(tmp.getUTCHours()+9);
        // let isoTmp = tmp.toISOString()

        const arr1 = message1.split(" ");
        if(arr1[2]){
            if (arr1[2] === "(대한민국 표준시)") {
                let tmp = arr1[0] + "T" + arr1[1] + "(UTC+9)";
            }else if(arr1[3] != null){
                let tmp = arr1[0] + "T" + arr1[1] + arr1[2];
            }else if(arr1[2] == null){
                let tmp = arr1[0] + "T" + arr1[1] + "(UTC+9)";
            }else{
                let tmp = arr1[0] + "T" + arr1[1] + arr1[2];
            }

        }
        
        
        return isoTmp.replace("Z","(UTC+9)");
    }
}