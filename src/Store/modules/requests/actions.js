export default{
    async contactCoach(context, payload){
        const newRequest = {
            // coachId:payload.coachId,
            message:payload.message,
            userEmail:payload.email
        }
        const response = await fetch(`https://vue-http-demo-989f8-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,{
            method:'post',
            body: JSON.stringify(newRequest)
        });
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'failed to send request');
            throw error;
        }
        newRequest.id = responseData.name
        newRequest.coachId = payload.coachId 

        context.commit('addRequest', newRequest)
    },
    async fetchRequests(context){
     const coachId = context.rootGetters.userId;
     const response = await fetch(`https://vue-http-demo-989f8-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`)
          const responseData = await response.json()
          if(!response.ok){
            const error = new Error(responseData.message || 'failed to fetch request');
            throw error;
        }
        const requests = [];
        for (const key in responseData){
        const request = {
            id: key,
            coachId: coachId,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message
        }
        requests.push(request);
    }
    context.commit('setRequests',requests )
    }

}


