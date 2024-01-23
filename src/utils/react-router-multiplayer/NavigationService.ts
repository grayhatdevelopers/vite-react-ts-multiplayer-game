class NavigationService {
	_navigation: any;
	navigate: any;

	constructor() {
		this._navigation = null;
		this.navigate = () => {};
	}

	set navigation(nav) {
		this._navigation = nav;
	}

	get navigation() {
		return this._navigation;
	}
}

const navigationService = new NavigationService();

export default navigationService;
