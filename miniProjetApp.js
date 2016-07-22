angular.module('miniProjetApp', [])

   
    .controller('miniProjetController', function ($scope) {
		
		$scope.isEditing=false;
		$scope.isEditingExisting=false;
		$scope.name="";
		$scope.lastName="";
		$scope.birthDate;
		$scope.reservation={};
		$scope.reservations=[{name:'Lahoussine',lastName:'Derradji', email:'lahoussine.derradji@gmail.com',participants:10,birthDate:new Date()},
		{name:'Eddy',lastName:'Mitchel', email:'eddy.mitchell@gmail.com',participants:10,birthDate:new Date()}];
		$scope.editedReservation=null;
		$scope.editedIndex=null;
		$scope.selectedIndex=null;
		$scope.event=null;
		function startEditing(){
			$scope.isEditing=true;			
		}
		function startEditingExisting(){
			$scope.isEditingExisting=true;
			$scope.selectedIndex=null;
			
		}		

		function stopEditing(){
			$scope.isEditing=false;			
		}
		function stopEditingExisting(){
			$scope.isEditingExisting=false;			
		}
		function shouldShowEditing(){
			return $scope.isEditing;
		}
		function shouldShowEditingExisting(){
			return $scope.isEditingExisting;
		}
		
		function ValidateEmail(mail) 
		{
			 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
			  {
				return (true);
			  }
		}
		function addReservation(reservation){
			$scope.reservations.push(reservation);
			stopEditing();
			toastr.success('Reservation done successfully!');
			console.log(reservation);
			console.log($scope.reservations);
		}
		function setEditedReservation(reservationIndex){
		$scope.editedIndex=reservationIndex;
		$scope.selectedIndex=reservationIndex;
		$scope.editedReservation= angular.copy($scope.reservations[reservationIndex]);
			console.log($scope.editedReservation.name);
			console.log($scope.editedReservation.lastName);
			console.log($scope.editedReservation.birthDate);
			console.log($scope.editedIndex);
			
		}
		function updateReservation(){
		$scope.reservations[$scope.editedIndex]=$scope.editedReservation;
		$scope.editedIndex=null;
		$scope.selectedIndex=null;
		stopEditingExisting();
		toastr.success('Reservation updated successfully!');
		}
		$scope.startEditing=startEditing;
		$scope.stopEditing=stopEditing;
		$scope.shouldShowEditing=shouldShowEditing;
		$scope.startEditingExisting=startEditingExisting;
		$scope.stopEditingExisting=stopEditingExisting;
		$scope.shouldShowEditingExisting=shouldShowEditingExisting;
		$scope.addReservation=addReservation;
		$scope.ValidateEmail=ValidateEmail;
		$scope.setEditedReservation=setEditedReservation;
		$scope.updateReservation=updateReservation;
		
    })