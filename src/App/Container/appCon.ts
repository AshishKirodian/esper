import { connect } from "react-redux";
import App from "../Component/App";
import StoreTree from "../../Utils/MainReducer/mainReducer";
export function mapStateToProps(appState: StoreTree, ownProps: any) {
    return {
        isLoggedIn: appState.app.isLoggedIn
    }
}
export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);