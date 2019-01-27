var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
const API_URL = 'http://hogarbarber.plesk.europcheapflights.com/api/';
const api =  {
    //get list of all salons
    getAllSalons(){
        let url = API_URL + 'Salons/GetSalons';
        return fetch(url)
            
    },
    //Get only active salons
    getOnlyActiveSalons() {
        let url = API_URL + 'Salons/GetSalons'
        return fetch(url)
    },
    getAreaId(){
        let url = API_URL + 'Area/GetData'
        return fetch(url)
    },
   
    addNewSalon(BusinessName, Address, Name, PostalCode, MemberTypeId, Note, PhoneNumber, Email, Password, BusinessType, CityId, AreaId, CountryId, ManageYourBookings, ReasonForSigningUp, Website, GoogleMaps, Image, ImagePath, CreatedBy, FrontendStatus, Noofchairs, Popularity, ClassId){
        let url = API_URL + 'Salons/InsertSalons?BusinessName={BusinessName}&Address={Address}&Name={Name}&PostalCode={PostalCode}&MemberTypeId={MemberTypeId}&Note={Note}&PhoneNumber={PhoneNumber}&Email={Email}&Password={Password}&BusinessType={BusinessType}&CityId={CityId}&AreaId={AreaId}&CountryId={CountryId}&ManageYourBookings={ManageYourBookings}&ReasonForSigningUp={ReasonForSigningUp}&Website={Website}&GoogleMaps={GoogleMaps}&Image={Image}&ImagePath={ImagePath}&CreatedBy={CreatedBy}&FrontendStatus={FrontendStatus}&Noofchairs={Noofchairs}&Popularity={Popularity}&ClassId={ClassId}'
    },
    _getNearSalonFromGoogle(lat, long){
        let api = 'AIzaSyBaXnpQyJnrADriOEfl8pPCIxO12cs1gxQ';
        let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=beauty_salon&keyword={keyword}&key=AIzaSyBaXnpQyJnrADriOEfl8pPCIxO12cs1gxQ`    
        return url;
    },
    getAreaByCityId(id) {
        let url = API_URL + 'Area/GetDatabyCityId?CityId=' + id
        return fetch(url)
    },
    getClasses() {
        let url = API_URL + '/ClassesApi/GetActiveClasses'
        return fetch(url)
    },
    getCity(){
        let url = API_URL + 'City/Getdata'
        return fetch(url)
    },
    getCategory() {
        let url = API_URL+ 'Category/GetCategory'
        return fetch(url)
    }
}

module.exports = api

 //api/Salons/InsertSalons?BusinessName={BusinessName}&Address={Address}&Name={Name}&PostalCode={PostalCode}&MemberTypeId={MemberTypeId}&Note={Note}&PhoneNumber={PhoneNumber}&Email={Email}&Password={Password}&BusinessType={BusinessType}&CityId={CityId}&AreaId={AreaId}&CountryId={CountryId}&ManageYourBookings={ManageYourBookings}&ReasonForSigningUp={ReasonForSigningUp}&Website={Website}&GoogleMaps={GoogleMaps}&Image={Image}&ImagePath={ImagePath}&CreatedBy={CreatedBy}&FrontendStatus={FrontendStatus}&Noofchairs={Noofchairs}&Popularity={Popularity}&ClassId={ClassId}