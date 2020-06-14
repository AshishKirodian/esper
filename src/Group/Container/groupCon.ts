import { connect } from "react-redux";
import Group from "../Component/group";
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
export default connect(mapStateToProps, mapDispatchToProps)(Group);