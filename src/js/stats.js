const stats = {

  init(store){

    const nowDate = new Date();
    const nowDateString = nowDate.getFullYear() + '-' +
      ('0' + (nowDate.getMonth() + 1)).slice(-2) + '-' +
      ('0' + (nowDate.getDate())).slice(-2);

    if(store.getState('lastVisit')!==undefined){

      const lastVisitDate = new Date(store.getState('lastVisit')+'T00:00:00.000Z');
      const lastVisitDateString = lastVisitDate.getFullYear() + '-' +
        ('0' + (lastVisitDate.getMonth() + 1)).slice(-2) + '-' +
        ('0' + (lastVisitDate.getDate())).slice(-2);

      if(nowDateString !== lastVisitDateString){
        let visits = store.getState('visits');
        visits++;
        store.setState('visits',visits);
      }
    }else{
      store.setState('visits',1);
    }

    store.setState('lastVisit', nowDateString);

  }

}

export default stats;