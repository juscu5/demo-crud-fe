import DashboardIcon from "@mui/icons-material/Dashboard";
import StarBorder from "@mui/icons-material/StarBorder";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PaymentIcon from "@mui/icons-material/Payment";
import ReportIcon from "@mui/icons-material/Report";
import { KeyIcon } from ".";

export const getKeyIcon = (name: string): JSX.Element => {

    const iconMap: KeyIcon = {
        DashboardIcon: <DashboardIcon />,
        StarBorder: <StarBorder />,
        EmojiPeopleIcon: <EmojiPeopleIcon />,
        PaymentIcon: <PaymentIcon />,
        ReportIcon: <ReportIcon/>,
    };

    return iconMap[name];
};