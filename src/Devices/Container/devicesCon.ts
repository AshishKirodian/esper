import { connect } from "react-redux";
import Devices from "../Component/devices";
import StoreTree from "../../Utils/MainReducer/mainReducer";
export function mapStateToProps(appState: StoreTree, ownProps: any) {
    return {
        enterpriseId: appState.app.enterpriseId
    }
}
export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Devices);