var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
const API_URL = 'http://hogarbarber.plesk.europcheapflights.com/api/';
const api =  {
    //get list of all salons
    getAllSalons(){
        let url = API_URL + 'Salons/GetSalons';
        return fetch(url)
            .then((res) => res.json())
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
    getNearBySalons() {
        
    },
    addNewSalon(BusinessName, Address, Name, PostalCode, MemberTypeId, Note, PhoneNumber, Email, Password, BusinessType, CityId, AreaId, CountryId, ManageYourBookings, ReasonForSigningUp, Website, GoogleMaps, Image, ImagePath, CreatedBy, FrontendStatus, Noofchairs, Popularity, ClassId){
        let url = API_URL + 'Salons/InsertSalons?BusinessName={BusinessName}&Address={Address}&Name={Name}&PostalCode={PostalCode}&MemberTypeId={MemberTypeId}&Note={Note}&PhoneNumber={PhoneNumber}&Email={Email}&Password={Password}&BusinessType={BusinessType}&CityId={CityId}&AreaId={AreaId}&CountryId={CountryId}&ManageYourBookings={ManageYourBookings}&ReasonForSigningUp={ReasonForSigningUp}&Website={Website}&GoogleMaps={GoogleMaps}&Image={Image}&ImagePath={ImagePath}&CreatedBy={CreatedBy}&FrontendStatus={FrontendStatus}&Noofchairs={Noofchairs}&Popularity={Popularity}&ClassId={ClassId}'
    }
}

module.exports = api

