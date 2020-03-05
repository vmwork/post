'use strict'
// эмитация аунтификайции
var autorizationName = document.querySelector('.atorization__name');
var autorizationPassword = document.querySelector('.atorization__password');
var autorizationButton = document.querySelector('.atorization__button');

if (autorizationName){
autorizationButton.addEventListener('click', function(event){
	event.preventDefault();

	if(autorizationName.value === 'admin' & autorizationPassword.value  === 'admin'){
		window.location.href = 'settings.html';
	} else if (autorizationName.value === 'curator' & autorizationPassword.value  === 'curator')  {
		window.location.href = 'curator-settings.html';
	} else if (autorizationName.value === 'man' & autorizationPassword.value  === 'man')  {
		window.location.href = 'index.html';
	} else {
			location.reload();
	}
})
}


// проверка замены пароля общие настройки куратор

var newPasswordCuratorSettings = document.querySelector('.js-password-new');
var confirmNewPasswordCuratorSettings = document.querySelector('.js-password-submit');
var buttonSaveCuratorSettings = document.querySelector('.settings-header__save')
var buttonCancelCuratorSettings = document.querySelector('.settings-header__cancel')
var writerCorrectPassword = document.querySelector('.password-new');

if (newPasswordCuratorSettings){
	buttonSaveCuratorSettings.addEventListener('click', function () {
		if(newPasswordCuratorSettings.value === confirmNewPasswordCuratorSettings.value & confirmNewPasswordCuratorSettings.value.length > 0){
			window.location.href = 'index.html';
		} else {
			writerCorrectPassword.textContent = 'Введите новый пароль согласно требованиям системы';
			writerCorrectPassword.style.color = 'red';
			confirmNewPasswordCuratorSettings.value = '';
			newPasswordCuratorSettings.value = '';
		}
	})
	// buttonCancelCuratorSettings.addEventListener('click', function () {
	//  	location.reload();
	//  })
	
}
// -------------------
// кнопки страницы настройки городов
var settingsHeaderSave = document.querySelector('.city-settings-button__save');
var settingsHeaderCancel= document.querySelector('.city-settings-button__cansel');
if (settingsHeaderSave){

	settingsHeaderSave.addEventListener('click', function(){
		window.location.href = 'settings.html';
	})
	settingsHeaderCancel.addEventListener('click', function(){
		window.location.href = 'settings.html';
	})
}

// -------------------
// кнопки страницы настройки продуктов
var settingsHeaderSaveProduct = document.querySelector('.product-settings-button__save');
var settingsHeaderCancelProduct= document.querySelector('.product-settings-button__cansel');
if (settingsHeaderSaveProduct){

	settingsHeaderSaveProduct.addEventListener('click', function(){
		window.location.href = 'settings.html';
	})
	settingsHeaderCancelProduct.addEventListener('click', function(){
		window.location.href = 'settings.html';
	})
}

// -------------------
// кнопки общие настройки admin
var adminButtoncitys = document.querySelector('.settings__admin-button--citys');
var adminButtonProduct = document.querySelector('.settings__admin-button--product');
if (adminButtoncitys){
adminButtoncitys.addEventListener('click', function () {
	window.location.href = 'city-settings.html';
})
adminButtonProduct.addEventListener('click', function () {
	window.location.href = 'prodouct-settinngs.html';
})
} else{}

// ----------------
// открытие меню  
var firstSelect = document.querySelector('.city');
var actingSelect = document.querySelector('.acting');
var selectAddcurier = document.querySelector('.select-addcurier');
var selectWorkManChouse = document.querySelector('.select-work-man');
var curatorSelect = document.querySelector('.select-responsible-curator');
var addTreasure = document.querySelector('.add-treasure__add-product');
var addTreasureSelectProduct = document.querySelector('.add-treasure__select-product');
var addTreasureAddProduct = document.querySelector('.editing-treasure__add-product');
var editingTreasureSelectProduct = document.querySelector('.editing-treasure__select-product');
var supportMainButtonSelect = document.querySelector('.support-main__button-select');
var supportMainButtonSelectCity = document.querySelector('.support-main__button-select-city');
var dossierCuratorSelectButton = document.querySelector('.dossier-settings__button-curator-select');
var dossierSupportSelect = document.querySelector('.dossier-settings__button-support-select');
var statisticIssued = document.querySelector('.statistic-issued');



if (firstSelect || actingSelect || selectAddcurier || selectWorkManChouse || curatorSelect || addTreasure|| addTreasureSelectProduct || addTreasureAddProduct || supportMainButtonSelect || supportMainButtonSelectCity || dossierCuratorSelectButton || dossierSupportSelect || statisticIssued){
var openMenu = function (idMenu){
	var selectContainer = idMenu.querySelectorAll('div');
	idMenu.classList.toggle('fix-border');
	selectContainer[1].classList.toggle('hidden');
	var divsOnContainer = selectContainer[1].querySelectorAll('div');
	
	for(var i = 0 ; i < divsOnContainer.length; i++){
		divsOnContainer[i].addEventListener('click', set_handler(i),false);
		}
		function set_handler(i){
  return function (e) {
    	selectContainer[0].textContent = this.textContent;
    var curierBlock = document.querySelector('.addcurier__curier-block');
   var curatorBlock = document.querySelector('.addcurier__curator-block');
   var supportBlock = document.querySelector('.addcurier__support-block')
    	if (this.textContent === 'Куратор'){
    		
    	
    	curierBlock.style.display = "none";
    	supportBlock.style.display = "none";
    	curatorBlock.style.display = "block";

    	} else if (this.textContent === 'Курьер') {

    	 curatorBlock.style.display = "none";
    	 supportBlock.style.display = "none";
    	 curierBlock.style.display = "block";

    	} else if (this.textContent === 'Саппорт'){
    		curatorBlock.style.display = "none";
    	 supportBlock.style.display = "block";
    	 curierBlock.style.display = "none";
    	}
  	
     };
}
}
if (firstSelect){
	var openFirsMenu = function () {
	return openMenu(firstSelect)
}
firstSelect.addEventListener('click', openFirsMenu, false);

};
if (actingSelect){
var openSecondMenu = function () {
	return openMenu(actingSelect)
}
actingSelect.addEventListener('click', openSecondMenu, false);
};
if (selectAddcurier){
var openPopapMenu = function () {
	return openMenu(selectAddcurier)
}
selectAddcurier.addEventListener('click', openPopapMenu, false);

};
if (selectWorkManChouse) {
var workManChouse = function () {
	return openMenu(selectWorkManChouse)
}
selectWorkManChouse.addEventListener('click', workManChouse, false);

};
if (curatorSelect){
var curatorChouse = function () {
	return openMenu(curatorSelect)
}
curatorSelect.addEventListener('click', curatorChouse, false);
};
if (addTreasure) {
	var trasureAdd = function(){
		return openMenu(addTreasure)
	}
addTreasure.addEventListener('click', trasureAdd, false);
}
if(addTreasureSelectProduct){
	var trasureAddProduct = function(){
		return openMenu(addTreasureSelectProduct)
	}
addTreasureSelectProduct.addEventListener('click', trasureAddProduct, false);
}

if(addTreasureAddProduct){
	var addTreasureAddProductFunc = function(){
		return openMenu(addTreasureAddProduct)
	}
	addTreasureAddProduct.addEventListener('click', addTreasureAddProductFunc, false);
}

if(editingTreasureSelectProduct){
	var editingTreasureSelectProductFunc = function(){
		return openMenu(editingTreasureSelectProduct)
	}
	editingTreasureSelectProduct.addEventListener('click', editingTreasureSelectProductFunc, false);
}
if (supportMainButtonSelect){
	var supportMainButtonSelectFunct = function(){
		return openMenu(supportMainButtonSelect)
	}
	supportMainButtonSelect.addEventListener('click', supportMainButtonSelectFunct, false)
}
if(supportMainButtonSelectCity){
	var supportMainButtonSelectCityFunc = function(){
		return openMenu(supportMainButtonSelectCity)
	}
	supportMainButtonSelectCity.addEventListener('click', supportMainButtonSelectCityFunc, false )
}
if(dossierCuratorSelectButton){
	var dossierCuratorSelectButtonFunc = function(){
		return openMenu(dossierCuratorSelectButton)
	}
	dossierCuratorSelectButton.addEventListener('click', dossierCuratorSelectButtonFunc, false)
}
if (dossierSupportSelect){
	var dossierSupportSelectFunc = function(){
		return openMenu(dossierSupportSelect)
	}
	dossierSupportSelect.addEventListener('click', dossierSupportSelectFunc, false)
}
if (statisticIssued){
	var statisticIssuedFunc = function(){
		return openMenu(statisticIssued)
	}
	statisticIssued.addEventListener('click',statisticIssuedFunc, false)
}
}


//-------------------

// Открытие попа в dossier 
var addcurierPopap = document.querySelector('.addcurier');
var openAddcurierPopap = document.querySelector('.dossier-button');
if (addcurierPopap || openAddcurierPopap){
	openAddcurierPopap.addEventListener('click', function(){
		addcurierPopap.classList.remove('hidden');
	})
var addcurierCancelButton = document.querySelector('.addcurier__cancel-button');
var addcurierSaveButton = document.querySelector('.addcurier__add-button');
var closeAddcurierPopap = function(){
	addcurierPopap.classList.add('hidden');
	var addcurierInputs = addcurierPopap.querySelectorAll('input')
	for (var i = 0; i < addcurierInputs.length; i++){
		addcurierInputs[i].value = '';
	}
}
addcurierCancelButton.addEventListener('click',closeAddcurierPopap);

addcurierSaveButton.addEventListener('click', closeAddcurierPopap)

}

// открытие окна курьера 
var dossierIdButtonsBlock = document.querySelector('.dossier-id-button');

if (dossierIdButtonsBlock){
var dossierIdButtons = dossierIdButtonsBlock.querySelectorAll('.dossier-id');


for(var i = 0 ; i < dossierIdButtons.length; i++){
		dossierIdButtons[i].addEventListener('click', set_handlerButton(i),false);
		}
		function set_handlerButton(i){
  return function (e) {
    	window.location.href = 'dossier-curator.html';
  	
     };
}
}


// кнопка добавления клада
 var addClad = document.querySelectorAll('.button-plus');

 var addTreasureWindow = document.querySelector('.add-treasure');

 if(addClad){
for (var i = 0; i < addClad.length; i++){
	addClad[i].addEventListener('click', addCladHandler(i), false)
}
function addCladHandler(j){
	return function(e){
addTreasureWindow.classList.toggle('hidden');
	}
}

 }
 // закрывашка окна клада

 var addTreasureSave = document.querySelector('.add-treasure__save');
  var addTreasureCansel = document.querySelector('.add-treasure__cancel');
  if(addTreasureSave){
  	addTreasureSave.addEventListener('click', function(){
  		addTreasureWindow.classList.toggle('hidden');
  	})
  	addTreasureCansel.addEventListener('click', function(){
  		addTreasureWindow.classList.toggle('hidden');
  	})
  }


// кнопка изменить / удалить

  var buttonSkMenu = document.querySelectorAll('.button-sk___menu');
  var buttonSk = document.querySelectorAll('.button-sk');
  var editingTreasure = document.querySelector('.editing-treasure');
  var deleteClad = document.querySelector('.delete-clad');

if (buttonSkMenu.length >  0 && buttonSk) {
for(var i = 0; i < buttonSk.length; i++){
	function openChangeMenu(i){
		buttonSk[i].addEventListener('click', function(){
buttonSkMenu[i].classList.toggle('hidden');

// найти кнопку изменить и повешать клик
var change = buttonSkMenu[i].querySelector('.button-sk__menu-change');


change.addEventListener('click', function(){
	editingTreasure.classList.remove('hidden');
	// закрыть окно изменеия клада
	buttonSkMenu[i].classList.add('hidden');

})
// найти кнопку удалить и повешать клик
 var deleteButtonSK = buttonSkMenu[i].querySelector('.button-sk__menu-delete');
 deleteButtonSK.addEventListener('click', function(){
 	deleteClad.classList.remove('hidden');
 	// закрыть окно изменеия клада
	buttonSkMenu[i].classList.add('hidden');

 })


		})} 
		openChangeMenu(i);
	}}

// сохранить отменить правку клада 

if (editingTreasure){
var editingTreasureSave = document.querySelector('.editing-treasure__save')
var editingTreasureCansel = document.querySelector('.editing-treasure__cancel')

// найти кнопку сохранить и при клике закрыть
editingTreasureSave.addEventListener('click', function(){
	editingTreasure.classList.add('hidden')

})
// найти кнопку отменить и при клике закрыть
editingTreasureCansel.addEventListener('click', function(){
	editingTreasure.classList.add('hidden')
})
} 

// счетчик колличество и вес
//-----------------------------------------
var treasureMinus = document.querySelector('.add-treasure__minus-count');
var treasurePlus = document.querySelector('.add-treasure__plus-count');
 var addTreasureWindow = document.querySelector('.add-treasure');
 if (addTreasureWindow){
var treasureID1 = addTreasureWindow.querySelector('.id1');
var treasureID2 = addTreasureWindow.querySelector('.id2');
}

var editingMinus = document.querySelector('.editing-treasure__minus-count');
var editingPlus = document.querySelector('.editing-treasure__plus-count');
if(editingTreasure){
var treasureID3 = editingTreasure.querySelector('.id1');
var treasureID4 = editingTreasure.querySelector('.id2');
}
if (treasureID2){
var treasureID2Text = document.querySelector('.id2').textContent;	
}


var treasureplus2 = document.querySelector('.add-treasure__minus-weight');
var treasureminus2 = document.querySelector('.add-treasure__plus-weight');


var countTreasurePlus = function(button, id, id2){
 button.addEventListener('click', function(){
 
 	id.textContent = Number(id.textContent) + 1;
 	 	id2.textContent = Number(id2.textContent) + Number(treasureID2Text)
 	 	id2.textContent = Number(id2.textContent).toFixed(2);
 })
}
var countTreasureMinus = function(button, id, id2){
 button.addEventListener('click', function(){

 		if(Number(id.textContent) > 1) {
  	id.textContent = Number(id.textContent) - 1;
 		id2.textContent = Number(id2.textContent) - Number(treasureID2Text)
 	 	id2.textContent = Number(id2.textContent).toFixed(2);
 	 	}
} 
 )
}
if (treasureMinus){
	countTreasurePlus(treasurePlus, treasureID1, treasureID2);
	countTreasureMinus(treasureMinus, treasureID1, treasureID2);

	countTreasurePlus(editingPlus, treasureID3, treasureID4);
	countTreasureMinus(editingMinus, treasureID3, treasureID4);

	// countTreasurePlus(treasureminus2, treasureID2);
	// countTreasureMinus(treasureplus2, treasureID2);
}
//---------------------------------------------------------
// удалить отменить клад

var cladButtonsDelete = document.querySelector('.delete-clad__buttons-delete');
var cladButtonCansel = document.querySelector('.delete-clad__buttons-cansel');
if (cladButtonsDelete){
	cladButtonsDelete.addEventListener('click', function(){
		deleteClad.classList.add('hidden');
	});
	cladButtonCansel.addEventListener('click', function(){
		deleteClad.classList.add('hidden');
	})

}
// изменение имени курьера
var settingsHeaderUserName = document.querySelector('.settings-header__user');
var settingsChangeName = document.querySelector('.settings-header__change-name');
if (settingsHeaderUserName){
	settingsHeaderUserName.addEventListener('click', function(){
		settingsChangeName.classList.remove('hidden')
	})
	if (settingsChangeName){
	var inputName = settingsChangeName.querySelector('.change-name__input');
	var saveName = settingsChangeName.querySelector('.change-name__save');
	var canselSaveName = settingsChangeName.querySelector('.change-name__cansel');
	canselSaveName.addEventListener('click', function(){
		settingsChangeName.classList.add('hidden')
	})
	saveName.addEventListener('click', function(){
		var newName = inputName.value;
		if(newName.length > 3 ){
		settingsHeaderUserName.textContent = newName;
		settingsChangeName.classList.add('hidden');
		inputName.style.border = "2px solid #363137";

			} else {
				inputName.style.border = "2px solid red"
			}
		})
}}
// переход с настройки курьера к досье курьера

var settingsCurierSave = document.querySelector('.settings-header__save');
var settingsCurierCansel = document.querySelector('.settings-header__cancel');

if (settingsCurierSave || settingsCurierCansel){
	settingsCurierSave.addEventListener('click', function(){
window.location.href = 'dossier-curator.html';
	});
	settingsCurierCansel.addEventListener('click', function(){
window.location.href = 'dossier-curator.html';	
	});
}

// Кнопка оплаты труда

var dossierSettingsButtonPay = document.querySelector('.dossier-settings__button-pay');
if(dossierSettingsButtonPay){
	dossierSettingsButtonPay.addEventListener('click', function(){
		window.location.href = 'payment-settinngs.html';	
	})
}

// выпадашка скачать / удалить
var saveDeletePopupsButtons = document.querySelectorAll('.support-main__document-fasten-title');
var saveDeletePopups = document.querySelectorAll('.document-popup');


if(saveDeletePopupsButtons){
	for (var i = 0; i < saveDeletePopupsButtons.length; i++){
	
	function opensaveDeletePopupsButtons (i) {
	saveDeletePopupsButtons[i].addEventListener('click', function(){
		saveDeletePopups[i].classList.toggle('hidden')
		var downloadDlete = saveDeletePopups[i].querySelector('.document-popup__delete');
	
		var downloadButton = saveDeletePopups[i].querySelector('.document-popup__download');

downloadButton.addEventListener('click', function(){
			saveDeletePopups[i].classList.add('hidden')
			
		})
		downloadDlete.addEventListener('click', function(){
			deleteClad.classList.remove('hidden');
			saveDeletePopups[i].classList.add('hidden')
			
		})
	})
	}
	opensaveDeletePopupsButtons(i)
	}

}

// зменения диспутов в досье саппорта

var cahngeDisputNamber = document.querySelectorAll('.table-header__smal-input');
var cahngeDisputInput = document.querySelectorAll('.inputNumber')
var disputNum = document.querySelectorAll('.disputNum')

if(cahngeDisputNamber){
	for (var i = 0; i < cahngeDisputNamber.length; i++){

cahngeDisputNamber[i].addEventListener('click', cahngeDisputNamberFunc(i), false)
}
function cahngeDisputNamberFunc(i){
	return function(e){
		cahngeDisputInput[i].style.display = "inline-block";

		document.addEventListener('keydown', function(evt){
		
	if(evt.keyCode === 13){
		cahngeDisputInput[i].style.display = "none";
		
		if(cahngeDisputInput[i].value !== ''){
		disputNum[i].textContent = cahngeDisputInput[i].value
		
		}
		 cahngeDisputInput[i].value = '';

		
		
}

})
	}
}
}

// открытие окна начисления диспутов
var disputButton = document.querySelectorAll('.disput');
var disputPopap = document.querySelector('.accrued-disputs');


if (disputButton){

	for (var i = 0; i < disputButton.length; i++){

	disputButton[i].addEventListener('click', function(){
		disputPopap.classList.remove('hidden')
	})
}
var disputButtonSave = document.querySelector('.accrued-disputs__save');
var disputButtonCansel = document.querySelector('.accrued-disputs__cancel')
disputButtonSave.addEventListener('click', function(){
	disputPopap.classList.add('hidden')
})
disputButtonCansel.addEventListener('click', function(){
	disputPopap.classList.add('hidden')
})

var	disputButtonCountPlus = document.querySelector('.accrued-disputs__plus-count');
var	disputButtonCountMinus = document.querySelector('.accrued-disputs__minus-count');
var disputCount = document.querySelector('.accrued-disputs__count');
disputButtonCountPlus.addEventListener('click', function(){
	disputCount.textContent = Number(disputCount.textContent) + 1;
})
disputButtonCountMinus.addEventListener('click', function(){
	if(Number(disputCount.textContent) > 1 ){
	disputCount.textContent = Number(disputCount.textContent) - 1;
	}
})
}
// открытие окна начисления штрафов
var depositButton = document.querySelectorAll('.deposit');
var depositPopup = document.querySelector('.accrued-deposit');
if(depositButton){
	for (var i = 0; i < depositButton.length; i++ ){
depositButton[i].addEventListener('click', function(){
	depositPopup.classList.remove('hidden');
})
}

var depositButtonSave = document.querySelector('.accrued-deposit__save');

depositButtonSave.addEventListener('click', function(){
	depositPopup.classList.add('hidden');
})

var depositButtonCansel = document.querySelector('.accrued-deposit__cancel');

depositButtonCansel.addEventListener('click', function(){
	depositPopup.classList.add('hidden');
})
	}
// открытие окна начисления выплачено
var paidButton = document.querySelectorAll('.paid');
var paidPopup = document.querySelector('.accrued-paid');

if(paidButton){
	for (var i = 0; i < paidButton.length; i++ ){
paidButton[i].addEventListener('click', function(){
	paidPopup.classList.remove('hidden');
})
}

var paidButtonSave = document.querySelector('.accrued-paid__save');

paidButtonSave.addEventListener('click', function(){
	paidPopup.classList.add('hidden');
})

var paidButtonCansel = document.querySelector('.accrued-paid__cancel');

paidButtonCansel.addEventListener('click', function(){
	paidPopup.classList.add('hidden');
})
	}
//ручное начисление
var inputDepositButton = document.querySelectorAll('.input__deposit');
var inputedDepozit = document.querySelectorAll('.inputed-depozit');
var depositIntput = document.querySelectorAll('.input-deposit');
console.log(inputDepositButton)

if (inputDepositButton) {

	for (var i = 0; i < inputDepositButton.length; i++)
	{
inputDepositButton[i].addEventListener('click', depositIntputOpen(i))
}
function depositIntputOpen (i){
	return function(e){
		depositIntput[i].classList.remove('hidden');
	depositIntput[i].addEventListener('keydown', depositIntputClose(i))
	}
}
function depositIntputClose (i){
	return function(e){
		if(e.keyCode === 13){
depositIntput[i].classList.add('hidden');
if (depositIntput[i].value !== ''){
inputedDepozit[i].textContent = depositIntput[i].value
depositIntput[i].value = '';
}
	}}
}

}