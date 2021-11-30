export function calculateBreaks({format, teamNumber, roundNumber, breakNumber}){
	var teamarr1 = [];
	var teamarr2 = [];

	//All teams at zero points in the beginning.
	for (var i=0; i<teamNumber; i++) {
       	teamarr1.push(0);
     	teamarr2.push(0);      
    }
		
	switch(format) {	
		case 'ap': 	
			for (var j = 0; j < roundNumber; j++) {
					for (var i = 0; i < teamNumber; i++) {
						if (i % 2 === 0) {   	//Case 1 : Where all pull ups win
							teamarr1[i]+=1;
						} else {			//Case 2 : Where all pull ups lose
							teamarr2[i]+=1;
						}
					}
					teamarr1.sort();
					teamarr2.sort();
				}
			break;
		case 'bp': 
				for (var j = 0; j < roundNumber; j++) {
						for (var i = 0; i < teamNumber; i++) {
							//Case 1 : Where all pull ups win
							if(i%4 === 0){
								teamarr1[i]+=3;
								teamarr1[i+1]+=2;
								teamarr1[i+2]+=1;				
							}
							//Case 2 : Where all pull ups lose
						    if(i%4 === 0){
								teamarr2[i+1]+=1;
								teamarr2[i+2]+=2;
								teamarr2[i+3]+=3;
							}
						}
						teamarr1.sort();
						teamarr2.sort();
					}
					break;
		default: 
				return false;
	}
	return({
        pullUpLose: output(teamarr1, breakNumber, teamNumber),
        pullUpWin: output(teamarr2, breakNumber, teamNumber)
    })
}
export function output(teamarr, num_break, num_teams){
	var breakTeams = teamarr.slice(-num_break);
	var breakMin = breakTeams[0];
	var breakMax = breakTeams[num_break-1];
	var breakCount = {};
	var totalCount = {};
	for(var i = breakMin;i <= breakMax;i++) {
		breakCount[i] = 0;
		totalCount[i] = 0;
	}
	for (var i = 0;i<breakTeams.length;i++) {
		breakCount[breakTeams[i]]++;
	}
	for (var i = 0;i<num_teams;i++){
		if (teamarr[i]>=breakMin){
			totalCount[teamarr[i]]++;;
		}
	}
    return({
        breakCount, totalCount
    })
}
