import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

type Props = {
    filter: Filter,
    onToggleDrawer: () => void
}
const tranlator = (arg: Filter) => {
    switch(arg){
        case "all":
            return '全てのタスク'
        case "checked":
            return '完了したタスク'
        case "unchecked":
            return '現在のタスク'
        case "removed":
            return 'ごみ箱'
        default:
            return 'TODO'
    }
}
export const ToolBar = (props: Props) => (
    <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="menu-button" size="large" edge="start" color="inherit" sx={{mr:2}} onClick={props.onToggleDrawer}>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography>{tranlator(props.filter)}</Typography>
            </Toolbar>
        </AppBar>
    </Box>
)