export const stylePC = `
.timer {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	font-family: 'source sans pro', sans-serif;
	overflow: hidden;
}

.topBar {
	background-color: #212121;
	width: 100%;
	min-width: 58.875rem;
	height: 10vh;
	min-height: 3.75rem;
	font-weight: 700;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: white;
	border-bottom: 2.5px solid white;
}

.topBar::selection {
	background: #282a35;
}

.formatName {
	font-size: 2.3rem;
	margin-left: 5rem;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.bellButton {
	border: none;
	background-color: transparent;
	background: none;
}
/* .bellButton i {
    font-size: 1.6rem !important;
} */
.fa-redo-alt {
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
}

.topBarIcons {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 8rem;
  margin-left: auto;
}
.topBarIcons i {
	font-size: 1.5rem;
}
.topBarIcon {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 50%;
}

.topBarIcon:hover {
	background-color: #000000;
}

.topBarIcons .fas {
	color: white;
}

.totalReset {
	background: none;
	border: none;
}

.formatSelectorContainer {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 18.4rem;
	color: black;
}
.extraSmallFormatSelector input {
	font-size: 2rem;
}
.formatSelectorContainer:hover {
	background-color: black;
}

#formatSelector {
	width: 80%;
	font-size: 0.8rem;
}

.mainScreen {
	height: 73vh;
	min-height: 15rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: white;
	background-color: black;
	font-size: 1.6rem;
}

.currentPeriod {
	margin-top: 1rem;
}

.timeDisplay {
	font-size: 5.6rem;	
  margin-bottom: 1rem;
}

.timeDisplayWithPoi {
  margin-top: 4.1rem;
}

.elapsed {
	color: rgb(255, 0, 0);
}

.poiButton {
	height: 3rem;
	background-color: #282a35;
	color: white;
	font-size: 2rem;
	border-radius: 10px;
	font-weight: bold;
	border: none;
	width: 7rem;
}

.poiButton:hover {
	background-color: rgb(82, 82, 82);
}


.bottomTexts {
	margin-bottom: 1rem;
}

.bottomBar {
	height: 10vh;
	min-height: 3.75rem;	
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 2px solid white;
	color: white;
	background-color: black;
}

.bottomBar button {
	background-color: #212121;
	border: none;
	color: white;
	height: 100%;
	font-size: 1.6rem;
	border: 1px solid black;
	font-weight: bolder;
	display: flex;
	align-items: center;
	justify-content: center;
}

.bottomBar button:hover {
	background-color: black;
}

.actionButton {
	width: 35%;
}

.arrowButton {
	width: 13%;
}

.ringBell {
	color: white;
	height: 10vh;
	width: 10%;
	/*shud be 4 but set to 10 for desk view*/
}

.ringBell i {
	font-size: 2rem; /*2.5*/
}
`
export const styleMobile = `
.timer {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	font-family: 'source sans pro', sans-serif;
	overflow: hidden;
}

.topBar {
	background-color: #212121;
	width: 100%;
	height: 10vh;
	font-weight: 700;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: white;
	border-bottom: 2.5px solid white;
}

.topBar::selection {
	background: #282a35;
}

.formatName {
	font-size: 2.3rem;
	width: 40%;
	margin-right: 27%; /*35%*/
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.bellButton {
	border: none;
	background-color: transparent;
	background: none;
}
/* .bellButton i {
    font-size: 1.6rem !important;
} */
.fa-redo-alt {
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
}

.topBarIcons {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 10%;
}
.topBarIcons i {
	font-size: 1.5rem;
}
.topBarIcon {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 50%;
}

.topBarIcon:hover {
	background-color: #000000;
}

.topBarIcons .fas {
	color: white;
}

.totalReset {
	background: none;
	border: none;
}

.formatSelectorContainer {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 23%; /*15%*/
	color: black;
}
.extraSmallFormatSelector input {
	font-size: 2rem;
}
.formatSelectorContainer:hover {
	background-color: black;
}

#formatSelector {
	width: 80%;
	font-size: 0.8rem;
}

.mainScreen {
	height: 73vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	background-color: black;
	font-size: 1.6rem; /*2*/
}

.currentPeriod {
	margin-bottom: auto;
	margin-top: 1rem;
}

.timeDisplay {
	font-size: 5.6rem; /*7*/
	margin-bottom: 1rem;
}

.elapsed {
	color: rgb(255, 0, 0);
}

.bottomBar {
	height: 10vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 2px solid white;
	color: white;
	background-color: black;
}

.bottomBar button {
	background-color: #212121;
	border: none;
	color: white;
	height: 100%;
	font-size: 1.6rem;
	border: 1px solid black;
	font-weight: bolder;
	display: flex;
	align-items: center;
	justify-content: center;
}

.bottomBar button:hover {
	background-color: black;
}

.actionButton {
	width: 35%;
}

.arrowButton {
	width: 13%;
}

.ringBell {
	color: white;
	height: 10vh;
	width: 10%;
	/*shud be 4 but set to 10 for desk view*/
}

.ringBell i {
	font-size: 2rem; /*2.5*/
}

.poiButton {
	height: 3rem;
	background-color: #282a35;
	color: white;
	font-size: 2rem;
	border-radius: 10px;
	font-weight: bold;
	border: none;
	width: 7rem;
}

.poiButton:hover {
	background-color: rgb(82, 82, 82);
}


.bottomTexts {
	margin-top: auto;
	margin-bottom: 1rem;
}

@media only screen and (max-width: 379px) {
	.topBar {
		background-color: #212121;
		width: 100%;
		height: 10vh;
		font-weight: 700;
		display: flex;
		align-items: center;
		color: white;
		border-bottom: 2.5px solid white;
	}
	.formatName {
		font-size: 0.9rem;
		width: 48%; /*40%*/
		margin-right: 0%;
	}
	.topBarIcons {
		width: 20%;
	}
	.topBarIcon {
		margin: 0;
	}
	.topBarIcons i {
		font-size: 1rem;
	}
	.topBarIcon:hover {
		background-color: transparent;
	}
	.formatSelectorContainer {
		width: 42%;
	}
	#formatSelector {
		font-size: 0.7rem;
		width: 100%;
	}
	.mainScreen {
		height: 77vh;
	}
	.currentPeriod {
		font-size: 1.5rem;
	}
	.timeDisplay {
		font-size: 5rem;
	}
	.poiButton:hover {
		background-color: #282a35;
	}
	.bottomTexts {
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
	}
	.bottomBar {
		height: 6vh;
		border: none;
	}
	.bottomBar button {
		font-size: 0.8rem;
		font-weight: 600;
		margin: 0.1rem;
		height: 80%;
		border-radius: 5px;
	}
	.bottomBar button:hover {
		background-color: #212121;
	}
	.ringBell i {
		font-size: 0.8rem;
	}
}
@media only screen and (max-width: 425px) and (min-width: 380px) {
	.topBar {
		height: 7vh;
	}
	.formatName {
		font-size: 0.85rem;
		width: 43%; /*40%*/
		margin-right: 2%; /*7%*/
	}
	.topBarIcons {
		width: 17%; /*20%*/
	}
	.topBarIcon {
		margin: 0;
		outline: 0;
	}
	.bellButton i {
		font-size: 1rem;
	}
	.totalReset i {
		font-size: 1rem;
	}
	.topBarIcon:hover {
		background-color: transparent;
	}
	.formatSelectorContainer {
		width: 45%; /*40%*/
		margin-right: 1%;
		margin-left: 2%;
	}
	#formatSelector {
		font-size: 0.8rem;
		width: 100%;
	}
	.mainScreen {
		height: 80vh;
	}
	.currentPeriod {
		font-size: 1.5rem;
	}
	.timeDisplay {
		font-size: 5rem;
	}
	.poiButton:hover {
		background-color: #282a35;
	}
	.bottomTexts {
		font-size: 0.8rem;
		margin-bottom: 0.2rem;
	}
	.bottomBar {
		height: 6vh;
		border: none;
	}
	.bottomBar button {
		font-size: 0.8rem;
		margin: 0.1rem;
		height: 80%;
		border-radius: 5px;
	}
	.bottomBar button:hover {
		background-color: #212121;
	}
	.ringBell i {
		font-size: 1rem;
	}
}
@media only screen and (max-width: 768px) and (min-width: 426px) {
	.topBar {
		border-bottom: 3px solid white;
	}
	.formatName {
		width: 45%; /*40%*/
		margin-right: 5%; /*15%*/
		font-size: 1.75rem;
	}
	.topBarIcons {
		width: 15%;
	}
	.bellButton {
	}
	.totalReset {
	}
	.topBarIcon:hover {
		background-color: transparent;
	}
	.formatSelectorContainer {
		width: 35%; /*30%*/
	}
	#formatSelector {
	}
	.mainScreen {
	}
	.currentPeriod {
	}
	.timeDisplay {
	}
	.poiButton:hover {
		background-color: #282a35;
	}
	.bottomTexts {
		font-size: 1.5rem;
	}
	.bottomBar {
	}
	.bottomBar button {
	}
	.bottomBar button:hover {
		background-color: #212121;
	}
	.ringBell i {
	}
}
`
