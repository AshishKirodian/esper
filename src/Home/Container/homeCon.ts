import { connect } from "react-redux";
import Home from "../Component/home";
import StoreTree from "../../Utils/MainReducer/mainReducer";
import AppActionGen from "../../App/Actions/actionGen";
export function mapStateToProps(appState: StoreTree, ownProps: any) {
    console.log(appState.app.isLoggedIn);
    return {
        isLoggedIn: appState.app.isLoggedIn,
        enterpriseName: appState.app.enterpriseName,
        enterpriseId: appState.app.enterpriseId,
        accessToken: appState.app.accessToken
    }
}
export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        getEntInfo: (id: string, token: string) => dispatch(AppActionGen.GetEntInfo(id, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);