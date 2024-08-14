import {MainLayout} from "@/admin/components/layouts";
import {SgPage, SgPageBody, SgPageHead} from "@/admin/components/ui/Page";
import {SgButton} from "@/admin/components/ui/Button";
import SgTable from "@/admin/components/ui/Table";
import SgIcon from "@/admin/components/ui/Icon";
import {useState} from "react";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {SgPopup} from "@/admin/components/ui/Popup";
import ApiService from "@/admin/services/ApiService";
import {
    STATIC_CONTENT_CREATE_ROUTE,
    STATIC_CONTENT_DELETE_ROUTE,
    STATIC_CONTENT_EDIT_ROUTE,
    STATIC_CONTENT_LIST_ROUTE
} from "@/admin/configs/apiRoutes";
import {useRouter} from "next/router";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import {changeData} from "@/admin/utils/changeData";

export default function Index(props) {
    const [data, setData] = useState({});
    const [selectedRow, setSelectedRow] = useState({});
    const [valueErrors, setValueErrors] = useState({});
    const [filters, setFilters] = useState({});
    const [removeItemModal, setRemoveItemModal] = useState(false);
    const [editItemModal, setEditItemModal] = useState(false);
    const router = useRouter();
    const { query } = router;
    const { locale } = query;
    const [icons, setIcons] = useState([
        {
            name: "wp",
            value: "sg-icon-wp"
        },
        {
            name: "images",
            value: "sg-icon-images"
        },
        {
            name: "calendar_solid_2",
            value: "sg-icon-calendar_solid_2"
        },
        {
            name: "linkedin",
            value: "sg-icon-linkedin"
        },
        {
            name: "insta_fill_n",
            value: "sg-icon-insta_fill_n"
        },
        {
            name: "fb_fill_n",
            value: "sg-icon-fb_fill_n"
        },
        {
            name: "awards",
            value: "sg-icon-awards"
        },
        {
            name: "zoom-out",
            value: "sg-icon-zoom-out"
        },
        {
            name: "zoom-in",
            value: "sg-icon-zoom-in"
        },
        {
            name: "zap-off",
            value: "sg-icon-zap-off"
        },
        {
            name: "zap",
            value: "sg-icon-zap"
        },
        {
            name: "youtube",
            value: "sg-icon-youtube"
        },
        {
            name: "x-square",
            value: "sg-icon-x-square"
        },
        {
            name: "x-octagon",
            value: "sg-icon-x-octagon"
        },
        {
            name: "x-circle",
            value: "sg-icon-x-circle"
        },
        {
            name: "x, times",
            value: "sg-icon-x, times"
        },
        {
            name: "wind",
            value: "sg-icon-wind"
        },
        {
            name: "wifi-off",
            value: "sg-icon-wifi-off"
        },
        {
            name: "wifi",
            value: "sg-icon-wifi"
        },
        {
            name: "watch",
            value: "sg-icon-watch"
        },
        {
            name: "volume-x",
            value: "sg-icon-volume-x"
        },
        {
            name: "volume-2",
            value: "sg-icon-volume-2"
        },
        {
            name: "volume-1",
            value: "sg-icon-volume-1"
        },
        {
            name: "volume",
            value: "sg-icon-volume"
        },
        {
            name: "voicemail",
            value: "sg-icon-voicemail"
        },
        {
            name: "video-off",
            value: "sg-icon-video-off"
        },
        {
            name: "video",
            value: "sg-icon-video"
        },
        {
            name: "user-x",
            value: "sg-icon-user-x"
        },
        {
            name: "users",
            value: "sg-icon-users"
        },
        {
            name: "user-plus",
            value: "sg-icon-user-plus"
        },
        {
            name: "user-minus",
            value: "sg-icon-user-minus"
        },
        {
            name: "user-check",
            value: "sg-icon-user-check"
        },
        {
            name: "user",
            value: "sg-icon-user"
        },
        {
            name: "upload-cloud",
            value: "sg-icon-upload-cloud"
        },
        {
            name: "upload",
            value: "sg-icon-upload"
        },
        {
            name: "unlock",
            value: "sg-icon-unlock"
        },
        {
            name: "underline",
            value: "sg-icon-underline"
        },
        {
            name: "umbrella",
            value: "sg-icon-umbrella"
        },
        {
            name: "type",
            value: "sg-icon-type"
        },
        {
            name: "twitter",
            value: "sg-icon-twitter"
        },
        {
            name: "twitch",
            value: "sg-icon-twitch"
        },
        {
            name: "tv",
            value: "sg-icon-tv"
        },
        {
            name: "truck",
            value: "sg-icon-truck"
        },
        {
            name: "triangle",
            value: "sg-icon-triangle"
        },
        {
            name: "trending-up",
            value: "sg-icon-trending-up"
        },
        {
            name: "trending-down",
            value: "sg-icon-trending-down"
        },
        {
            name: "trello",
            value: "sg-icon-trello"
        },
        {
            name: "trash-2",
            value: "sg-icon-trash-2"
        },
        {
            name: "trash",
            value: "sg-icon-trash"
        },
        {
            name: "tool",
            value: "sg-icon-tool"
        },
        {
            name: "toggle-right",
            value: "sg-icon-toggle-right"
        },
        {
            name: "toggle-left",
            value: "sg-icon-toggle-left"
        },
        {
            name: "thumbs-up",
            value: "sg-icon-thumbs-up"
        },
        {
            name: "thumbs-down",
            value: "sg-icon-thumbs-down"
        },
        {
            name: "thermometer",
            value: "sg-icon-thermometer"
        },
        {
            name: "terminal",
            value: "sg-icon-terminal"
        },
        {
            name: "target",
            value: "sg-icon-target"
        },
        {
            name: "tag",
            value: "sg-icon-tag"
        },
        {
            name: "tablet",
            value: "sg-icon-tablet"
        },
        {
            name: "sunset",
            value: "sg-icon-sunset"
        },
        {
            name: "sunrise",
            value: "sg-icon-sunrise"
        },
        {
            name: "sun",
            value: "sg-icon-sun"
        },
        {
            name: "stop-circle",
            value: "sg-icon-stop-circle"
        },
        {
            name: "star",
            value: "sg-icon-star"
        },
        {
            name: "square",
            value: "sg-icon-square"
        },
        {
            name: "speaker",
            value: "sg-icon-speaker"
        },
        {
            name: "smile",
            value: "sg-icon-smile"
        },
        {
            name: "smartphone",
            value: "sg-icon-smartphone"
        },
        {
            name: "sliders",
            value: "sg-icon-sliders"
        },
        {
            name: "slash-divider",
            value: "sg-icon-slash-divider"
        },
        {
            name: "slash",
            value: "sg-icon-slash"
        },
        {
            name: "slack",
            value: "sg-icon-slack"
        },
        {
            name: "skip-forward",
            value: "sg-icon-skip-forward"
        },
        {
            name: "skip-back",
            value: "sg-icon-skip-back"
        },
        {
            name: "sidebar",
            value: "sg-icon-sidebar"
        },
        {
            name: "shuffle",
            value: "sg-icon-shuffle"
        },
        {
            name: "shopping-cart",
            value: "sg-icon-shopping-cart"
        },
        {
            name: "shopping-bag",
            value: "sg-icon-shopping-bag"
        },
        {
            name: "shield-off",
            value: "sg-icon-shield-off"
        },
        {
            name: "shield",
            value: "sg-icon-shield"
        },
        {
            name: "share-2",
            value: "sg-icon-share-2"
        },
        {
            name: "share",
            value: "sg-icon-share"
        },
        {
            name: "settings",
            value: "sg-icon-settings"
        },
        {
            name: "server",
            value: "sg-icon-server"
        },
        {
            name: "send",
            value: "sg-icon-send"
        },
        {
            name: "search1",
            value: "sg-icon-search1"
        },
        {
            name: "scissors",
            value: "sg-icon-scissors"
        },
        {
            name: "save",
            value: "sg-icon-save"
        },
        {
            name: "rss",
            value: "sg-icon-rss"
        },
        {
            name: "rotate-cw",
            value: "sg-icon-rotate-cw"
        },
        {
            name: "rotate-ccw",
            value: "sg-icon-rotate-ccw"
        },
        {
            name: "rocket",
            value: "sg-icon-rocket"
        },
        {
            name: "rewind",
            value: "sg-icon-rewind"
        },
        {
            name: "repeat",
            value: "sg-icon-repeat"
        },
        {
            name: "refresh-cw",
            value: "sg-icon-refresh-cw"
        },
        {
            name: "refresh-ccw",
            value: "sg-icon-refresh-ccw"
        },
        {
            name: "radio",
            value: "sg-icon-radio"
        },
        {
            name: "printer",
            value: "sg-icon-printer"
        },
        {
            name: "power",
            value: "sg-icon-power"
        },
        {
            name: "pocket",
            value: "sg-icon-pocket"
        },
        {
            name: "plus-square",
            value: "sg-icon-plus-square"
        },
        {
            name: "plus-circle",
            value: "sg-icon-plus-circle"
        },
        {
            name: "plus",
            value: "sg-icon-plus"
        },
        {
            name: "play-circle",
            value: "sg-icon-play-circle"
        },
        {
            name: "play",
            value: "sg-icon-play"
        },
        {
            name: "pie-chart",
            value: "sg-icon-pie-chart"
        },
        {
            name: "phone-outgoing",
            value: "sg-icon-phone-outgoing"
        },
        {
            name: "phone-off",
            value: "sg-icon-phone-off"
        },
        {
            name: "phone-missed",
            value: "sg-icon-phone-missed"
        },
        {
            name: "phone-incoming",
            value: "sg-icon-phone-incoming"
        },
        {
            name: "phone-forwarded",
            value: "sg-icon-phone-forwarded"
        },
        {
            name: "phone-call",
            value: "sg-icon-phone-call"
        },
        {
            name: "phone1",
            value: "sg-icon-phone1"
        },
        {
            name: "percent",
            value: "sg-icon-percent"
        },
        {
            name: "pen-tool",
            value: "sg-icon-pen-tool"
        },
        {
            name: "pause-circle",
            value: "sg-icon-pause-circle"
        },
        {
            name: "pause",
            value: "sg-icon-pause"
        },
        {
            name: "paperclip",
            value: "sg-icon-paperclip"
        },
        {
            name: "package",
            value: "sg-icon-package"
        },
        {
            name: "octagon",
            value: "sg-icon-octagon"
        },
        {
            name: "navigation-2",
            value: "sg-icon-navigation-2"
        },
        {
            name: "navigation",
            value: "sg-icon-navigation"
        },
        {
            name: "music",
            value: "sg-icon-music"
        },
        {
            name: "move",
            value: "sg-icon-move"
        },
        {
            name: "mouse-pointer",
            value: "sg-icon-mouse-pointer"
        },
        {
            name: "more-vertical",
            value: "sg-icon-more-vertical"
        },
        {
            name: "more-horizontal",
            value: "sg-icon-more-horizontal"
        },
        {
            name: "moon",
            value: "sg-icon-moon"
        },
        {
            name: "monitor",
            value: "sg-icon-monitor"
        },
        {
            name: "minus-square",
            value: "sg-icon-minus-square"
        },
        {
            name: "minus-circle",
            value: "sg-icon-minus-circle"
        },
        {
            name: "minus",
            value: "sg-icon-minus"
        },
        {
            name: "minimize-2",
            value: "sg-icon-minimize-2"
        },
        {
            name: "minimize",
            value: "sg-icon-minimize"
        },
        {
            name: "mic-off",
            value: "sg-icon-mic-off"
        },
        {
            name: "mic",
            value: "sg-icon-mic"
        },
        {
            name: "message-square",
            value: "sg-icon-message-square"
        },
        {
            name: "message-circle",
            value: "sg-icon-message-circle"
        },
        {
            name: "menu-2",
            value: "sg-icon-menu-2"
        },
        {
            name: "menu",
            value: "sg-icon-menu"
        },
        {
            name: "meh",
            value: "sg-icon-meh"
        },
        {
            name: "maximize-2",
            value: "sg-icon-maximize-2"
        },
        {
            name: "maximize",
            value: "sg-icon-maximize"
        },
        {
            name: "map-pin",
            value: "sg-icon-map-pin"
        },
        {
            name: "map",
            value: "sg-icon-map"
        },
        {
            name: "mail1",
            value: "sg-icon-mail1"
        },
        {
            name: "log-out",
            value: "sg-icon-log-out"
        },
        {
            name: "log-in",
            value: "sg-icon-log-in"
        },
        {
            name: "lock",
            value: "sg-icon-lock"
        },
        {
            name: "loader",
            value: "sg-icon-loader"
        },
        {
            name: "list",
            value: "sg-icon-list"
        },
        {
            name: "linkedin1",
            value: "sg-icon-linkedin1"
        },
        {
            name: "link-2",
            value: "sg-icon-link-2"
        },
        {
            name: "link",
            value: "sg-icon-link"
        },
        {
            name: "life-buoy",
            value: "sg-icon-life-buoy"
        },
        {
            name: "layout",
            value: "sg-icon-layout"
        },
        {
            name: "key",
            value: "sg-icon-key"
        },
        {
            name: "italic",
            value: "sg-icon-italic"
        },
        {
            name: "instagram1",
            value: "sg-icon-instagram1"
        },
        {
            name: "info",
            value: "sg-icon-info"
        },
        {
            name: "inbox",
            value: "sg-icon-inbox"
        },
        {
            name: "image",
            value: "sg-icon-image"
        },
        {
            name: "home",
            value: "sg-icon-home"
        },
        {
            name: "hexagon",
            value: "sg-icon-hexagon"
        },
        {
            name: "help-circle",
            value: "sg-icon-help-circle"
        },
        {
            name: "heart",
            value: "sg-icon-heart"
        },
        {
            name: "headphones",
            value: "sg-icon-headphones"
        },
        {
            name: "hash",
            value: "sg-icon-hash"
        },
        {
            name: "hard-drive",
            value: "sg-icon-hard-drive"
        },
        {
            name: "grid",
            value: "sg-icon-grid"
        },
        {
            name: "globe",
            value: "sg-icon-globe"
        },
        {
            name: "git-pull-request",
            value: "sg-icon-git-pull-request"
        },
        {
            name: "git-merge",
            value: "sg-icon-git-merge"
        },
        {
            name: "gitlab",
            value: "sg-icon-gitlab"
        },
        {
            name: "github",
            value: "sg-icon-github"
        },
        {
            name: "git-commit",
            value: "sg-icon-git-commit"
        },
        {
            name: "git-branch",
            value: "sg-icon-git-branch"
        },
        {
            name: "gift",
            value: "sg-icon-gift"
        },
        {
            name: "frown",
            value: "sg-icon-frown"
        },
        {
            name: "framer",
            value: "sg-icon-framer"
        },
        {
            name: "folder-plus",
            value: "sg-icon-folder-plus"
        },
        {
            name: "folder-minus",
            value: "sg-icon-folder-minus"
        },
        {
            name: "folder",
            value: "sg-icon-folder"
        },
        {
            name: "flag",
            value: "sg-icon-flag"
        },
        {
            name: "Filters-lines",
            value: "sg-icon-Filters-lines"
        },
        {
            name: "filter",
            value: "sg-icon-filter"
        },
        {
            name: "film",
            value: "sg-icon-film"
        },
        {
            name: "file-text",
            value: "sg-icon-file-text"
        },
        {
            name: "file-plus",
            value: "sg-icon-file-plus"
        },
        {
            name: "file-minus",
            value: "sg-icon-file-minus"
        },
        {
            name: "file",
            value: "sg-icon-file"
        },
        {
            name: "figma",
            value: "sg-icon-figma"
        },
        {
            name: "feather",
            value: "sg-icon-feather"
        },
        {
            name: "fast-forward",
            value: "sg-icon-fast-forward"
        },
        {
            name: "facebook",
            value: "sg-icon-facebook"
        },
        {
            name: "eye-off",
            value: "sg-icon-eye-off"
        },
        {
            name: "eye",
            value: "sg-icon-eye"
        },
        {
            name: "external-link",
            value: "sg-icon-external-link"
        },
        {
            name: "edit-3",
            value: "sg-icon-edit-3"
        },
        {
            name: "edit-2",
            value: "sg-icon-edit-2"
        },
        {
            name: "edit",
            value: "sg-icon-edit"
        },
        {
            name: "droplet",
            value: "sg-icon-droplet"
        },
        {
            name: "dribbble",
            value: "sg-icon-dribbble"
        },
        {
            name: "download-cloud",
            value: "sg-icon-download-cloud"
        },
        {
            name: "download",
            value: "sg-icon-download"
        },
        {
            name: "dollar-sign",
            value: "sg-icon-dollar-sign"
        },
        {
            name: "divide-square",
            value: "sg-icon-divide-square"
        },
        {
            name: "divide-circle",
            value: "sg-icon-divide-circle"
        },
        {
            name: "divide",
            value: "sg-icon-divide"
        },
        {
            name: "disc",
            value: "sg-icon-disc"
        },
        {
            name: "delete",
            value: "sg-icon-delete"
        },
        {
            name: "database",
            value: "sg-icon-database"
        },
        {
            name: "crosshair",
            value: "sg-icon-crosshair"
        },
        {
            name: "crop",
            value: "sg-icon-crop"
        },
        {
            name: "credit-card",
            value: "sg-icon-credit-card"
        },
        {
            name: "cpu",
            value: "sg-icon-cpu"
        },
        {
            name: "corner-up-right",
            value: "sg-icon-corner-up-right"
        },
        {
            name: "corner-up-left",
            value: "sg-icon-corner-up-left"
        },
        {
            name: "corner-right-up",
            value: "sg-icon-corner-right-up"
        },
        {
            name: "corner-right-down",
            value: "sg-icon-corner-right-down"
        },
        {
            name: "corner-left-up",
            value: "sg-icon-corner-left-up"
        },
        {
            name: "corner-left-down",
            value: "sg-icon-corner-left-down"
        },
        {
            name: "corner-down-right",
            value: "sg-icon-corner-down-right"
        },
        {
            name: "corner-down-left",
            value: "sg-icon-corner-down-left"
        },
        {
            name: "copy",
            value: "sg-icon-copy"
        },
        {
            name: "compass",
            value: "sg-icon-compass"
        },
        {
            name: "command",
            value: "sg-icon-command"
        },
        {
            name: "columns",
            value: "sg-icon-columns"
        },
        {
            name: "coin-stack",
            value: "sg-icon-coin-stack"
        },
        {
            name: "coins",
            value: "sg-icon-coins"
        },
        {
            name: "coffee",
            value: "sg-icon-coffee"
        },
        {
            name: "codesandbox",
            value: "sg-icon-codesandbox"
        },
        {
            name: "codepen",
            value: "sg-icon-codepen"
        },
        {
            name: "code",
            value: "sg-icon-code"
        },
        {
            name: "cloud-snow",
            value: "sg-icon-cloud-snow"
        },
        {
            name: "cloud-rain",
            value: "sg-icon-cloud-rain"
        },
        {
            name: "cloud-off",
            value: "sg-icon-cloud-off"
        },
        {
            name: "cloud-lightning",
            value: "sg-icon-cloud-lightning"
        },
        {
            name: "cloud-drizzle",
            value: "sg-icon-cloud-drizzle"
        },
        {
            name: "cloud",
            value: "sg-icon-cloud"
        },
        {
            name: "clock",
            value: "sg-icon-clock"
        },
        {
            name: "clipboard",
            value: "sg-icon-clipboard"
        },
        {
            name: "circle",
            value: "sg-icon-circle"
        },
        {
            name: "chrome",
            value: "sg-icon-chrome"
        },
        {
            name: "chevron-up",
            value: "sg-icon-chevron-up"
        },
        {
            name: "chevrons-up",
            value: "sg-icon-chevrons-up"
        },
        {
            name: "chevrons-right",
            value: "sg-icon-chevrons-right"
        },
        {
            name: "chevrons-left",
            value: "sg-icon-chevrons-left"
        },
        {
            name: "chevrons-down",
            value: "sg-icon-chevrons-down"
        },
        {
            name: "chevron-right",
            value: "sg-icon-chevron-right"
        },
        {
            name: "chevron-left",
            value: "sg-icon-chevron-left"
        },
        {
            name: "chevron-down",
            value: "sg-icon-chevron-down"
        },
        {
            name: "check-square",
            value: "sg-icon-check-square"
        },
        {
            name: "check-circle",
            value: "sg-icon-check-circle"
        },
        {
            name: "check",
            value: "sg-icon-check"
        },
        {
            name: "cast",
            value: "sg-icon-cast"
        },
        {
            name: "camera-off",
            value: "sg-icon-camera-off"
        },
        {
            name: "camera",
            value: "sg-icon-camera"
        },
        {
            name: "calendar1",
            value: "sg-icon-calendar1"
        },
        {
            name: "building-08",
            value: "sg-icon-building-08"
        },
        {
            name: "briefcase",
            value: "sg-icon-briefcase"
        },
        {
            name: "box",
            value: "sg-icon-box"
        },
        {
            name: "book-open",
            value: "sg-icon-book-open"
        },
        {
            name: "bookmark",
            value: "sg-icon-bookmark"
        },
        {
            name: "book",
            value: "sg-icon-book"
        },
        {
            name: "bold",
            value: "sg-icon-bold"
        },
        {
            name: "bluetooth",
            value: "sg-icon-bluetooth"
        },
        {
            name: "bell-off",
            value: "sg-icon-bell-off"
        },
        {
            name: "bell",
            value: "sg-icon-bell"
        },
        {
            name: "battery-charging",
            value: "sg-icon-battery-charging"
        },
        {
            name: "battery",
            value: "sg-icon-battery"
        },
        {
            name: "bar-chart-2",
            value: "sg-icon-bar-chart-2"
        },
        {
            name: "bar-chart",
            value: "sg-icon-bar-chart"
        },
        {
            name: "award",
            value: "sg-icon-award"
        },
        {
            name: "at-sign",
            value: "sg-icon-at-sign"
        },
        {
            name: "arrow-up-right",
            value: "sg-icon-arrow-up-right"
        },
        {
            name: "arrow-up-left",
            value: "sg-icon-arrow-up-left"
        },
        {
            name: "arrow-up-circle",
            value: "sg-icon-arrow-up-circle"
        },
        {
            name: "arrow-up",
            value: "sg-icon-arrow-up"
        },
        {
            name: "arrow-right-circle",
            value: "sg-icon-arrow-right-circle"
        },
        {
            name: "arrow-right",
            value: "sg-icon-arrow-right"
        },
        {
            name: "arrow-left-circle",
            value: "sg-icon-arrow-left-circle"
        },
        {
            name: "arrow-left",
            value: "sg-icon-arrow-left"
        },
        {
            name: "arrow-down-right",
            value: "sg-icon-arrow-down-right"
        },
        {
            name: "arrow-down-left",
            value: "sg-icon-arrow-down-left"
        },
        {
            name: "arrow-down-circle",
            value: "sg-icon-arrow-down-circle"
        },
        {
            name: "arrow-down",
            value: "sg-icon-arrow-down"
        },
        {
            name: "archive",
            value: "sg-icon-archive"
        },
        {
            name: "aperture",
            value: "sg-icon-aperture"
        },
        {
            name: "anchor",
            value: "sg-icon-anchor"
        },
        {
            name: "align-right",
            value: "sg-icon-align-right"
        },
        {
            name: "align-left",
            value: "sg-icon-align-left"
        },
        {
            name: "align-justify",
            value: "sg-icon-align-justify"
        },
        {
            name: "align-center",
            value: "sg-icon-align-center"
        },
        {
            name: "alert-triangle",
            value: "sg-icon-alert-triangle"
        },
        {
            name: "alert-octagon",
            value: "sg-icon-alert-octagon"
        },
        {
            name: "alert-circle",
            value: "sg-icon-alert-circle"
        },
        {
            name: "airplay",
            value: "sg-icon-airplay"
        },
        {
            name: "activity",
            value: "sg-icon-activity"
        },
        {
            name: "layers",
            value: "sg-icon-layers"
        },
        {
            name: "layers1",
            value: "sg-icon-layers1"
        },
        {
            name: "download1",
            value: "sg-icon-download1"
        },
        {
            name: "plus1",
            value: "sg-icon-plus1"
        },
        {
            name: "minus1",
            value: "sg-icon-minus1"
        },
        {
            name: "facebook_fill",
            value: "sg-icon-facebook_fill"
        },
        {
            name: "instagram_fill",
            value: "sg-icon-instagram_fill"
        },
        {
            name: "person",
            value: "sg-icon-person"
        },
        {
            name: "skype_fill",
            value: "sg-icon-skype_fill"
        },
        {
            name: "university",
            value: "sg-icon-university"
        },
        {
            name: "work",
            value: "sg-icon-work"
        },
        {
            name: "euro",
            value: "sg-icon-euro"
        },
        {
            name: "calendar_2",
            value: "sg-icon-calendar_2"
        },
        {
            name: "url",
            value: "sg-icon-url"
        },
        {
            name: "mail",
            value: "sg-icon-mail"
        },
        {
            name: "location",
            value: "sg-icon-location"
        },
        {
            name: "phone",
            value: "sg-icon-phone"
        },
        {
            name: "search",
            value: "sg-icon-search"
        },
        {
            name: "tg",
            value: "sg-icon-tg"
        },
        {
            name: "tg_circle",
            value: "sg-icon-tg_circle"
        },
        {
            name: "vp",
            value: "sg-icon-vp"
        },
        {
            name: "vp_circle",
            value: "sg-icon-vp_circle"
        },
        {
            name: "arrow_right",
            value: "sg-icon-arrow_right"
        },
        {
            name: "arrow_top",
            value: "sg-icon-arrow_top"
        },
        {
            name: "arrow_left",
            value: "sg-icon-arrow_left"
        },
        {
            name: "arrow_bottom",
            value: "sg-icon-arrow_bottom"
        },
        {
            name: "arrow_chevron_right_top",
            value: "sg-icon-arrow_chevron_right_top"
        },
        {
            name: "arrow_chevron_left",
            value: "sg-icon-arrow_chevron_left"
        },
        {
            name: "arrow_chevron_bottom",
            value: "sg-icon-arrow_chevron_bottom"
        },
        {
            name: "arrow_chevron_right",
            value: "sg-icon-arrow_chevron_right"
        },
        {
            name: "arrow_chevron_top",
            value: "sg-icon-arrow_chevron_top"
        },
        {
            name: "calendar",
            value: "sg-icon-calendar"
        },
        {
            name: "instagram",
            value: "sg-icon-instagram"
        },
        {
            name: "instagram_circle",
            value: "sg-icon-instagram_circle"
        },
        {
            name: "linkedin2",
            value: "sg-icon-linkedin2"
        },
        {
            name: "linkedin_circle",
            value: "sg-icon-linkedin_circle"
        }
    ])

    function toggleRemoveItemModal() {
        setRemoveItemModal(!removeItemModal)
    }

    function handleRemoveItem() {
        ApiService.delete(`${STATIC_CONTENT_DELETE_ROUTE}/${selectedRow.id}`).then(response => {
            toggleRemoveItemModal()
            setFilters({...filters})
        }).catch(error => {
            console.log(error)
        })
    }

    function toggleEditItemModal() {
        setEditItemModal(!editItemModal)
    }

    function handleEditItem() {
        ApiService.put(`${STATIC_CONTENT_EDIT_ROUTE}/${selectedRow.id}/translate`, selectedRow, {headers: {"Content-Language": locale}}).then(response => {
            toggleEditItemModal()
            setFilters({...filters})
        }).catch(error => {
            console.log(error)
        })
    }

    function handleAddItem() {
        ApiService.post(`${STATIC_CONTENT_CREATE_ROUTE}`, data, {headers: {"Content-Language": locale}}).then(response => {
            setFilters({...filters})
        }).catch(error => {
            console.log(error)
        })
    }

    function handleChange(e) {
        changeData(e, selectedRow, setSelectedRow, valueErrors, setValueErrors)
    }

    function handleChangeNew(e) {
        changeData(e, data, setData, valueErrors, setValueErrors)
    }


    return (
        <>
            <SgPage>
                <SgPageHead
                    header='Settings'
                    description='View your site settings.'
                    filter={true}
                >
                    <SgButton
                        type='link'
                        isLinked={true}
                        to='/admin/settings'
                        color='primary'
                        size='md'
                    >
                        Settings
                    </SgButton>
                </SgPageHead>
                <SgPageBody>
                    <div className='row align-items-end mb-[72px]'>
                        <div className='col-lg'>
                            <SgInput
                                id='title'
                                name='title'
                                label='Title'
                                placeholder='Title'
                                value={data.title}
                                onChange={handleChangeNew}
                            />
                        </div>
                        <div className='col-lg'>
                            <SgInput
                                id='value'
                                name='value'
                                label='Value'
                                placeholder='Value'
                                value={data.value}
                                onChange={handleChangeNew}
                            />
                        </div>
                        <div className='col-lg'>

                            <SgInput
                                name='meta'
                                id='meta'
                                placeholder='Meta'
                                label='Status'
                                value={data.meta || ''}
                                onChange={handleChangeNew}
                                variant='select'
                                options={icons}
                            />
                        </div>
                        <div className='col-lg-auto'>
                            <SgButton
                                size='lg'
                                color='primary'
                                onClick={handleAddItem}
                            >
                                Add
                            </SgButton>
                        </div>
                    </div>
                    <SgTable
                        tableData={{
                            data: [
                                {
                                    key: 'id',
                                    name: 'ID',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                            {key}
                                            </>
                                        )
                                    }
                                },
                                {
                                    key: 'alias',
                                    name: 'Alias',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                {key}
                                            </>
                                        )
                                    }
                                },
                                {
                                    key: 'value',
                                    name: 'Value',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                {key}
                                            </>
                                        )
                                    }
                                },
                                {
                                    key: 'id',
                                    name: 'Operation',
                                    hidden: false,
                                    cell: (row, key) => {
                                        return (
                                            <>
                                                <SgButtonGroup>
                                                    <SgButton
                                                        size='xs'
                                                        color='primary'
                                                        onClick={toggleEditItemModal}
                                                    >
                                                        Edit
                                                    </SgButton>
                                                    <SgButton
                                                        size='xs'
                                                        color='error'
                                                        onClick={toggleRemoveItemModal}
                                                    >
                                                        Remove
                                                    </SgButton>
                                                </SgButtonGroup>
                                            </>
                                        );
                                    }
                                }
                            ],
                            api: STATIC_CONTENT_LIST_ROUTE,
                            headers: {
                                "Content-Language": locale
                            },
                            filters: {filters}
                        }}
                        onClick={(e, row, index) => {setSelectedRow(row)}}
                    />
                </SgPageBody>

                <SgPopup
                    header='Remove Language'
                    description='lol'
                    size='md'
                    setToggleModal={toggleRemoveItemModal}
                    toggleModal={removeItemModal}
                >
                    <SgButtonGroup
                        gap={true}
                    >
                        <SgButton
                            size='lg'
                            color='error'
                            onClick={handleRemoveItem}
                        >
                            Remove
                        </SgButton>
                        <SgButton
                            size='lg'
                            color='primary'
                            onClick={toggleRemoveItemModal}
                        >
                            Cancel
                        </SgButton>
                    </SgButtonGroup>
                </SgPopup>

                <SgPopup
                    header='Edit Language'
                    description='lol'
                    size='md'
                    setToggleModal={toggleEditItemModal}
                    toggleModal={editItemModal}
                >
                    <SgFormGroup>
                        <SgInput
                            id='alias'
                            name='alias'
                            label='Alias'
                            placeholder='Alias'
                            value={selectedRow.alias}
                            onChange={handleChange}
                        />
                    </SgFormGroup>
                    <SgFormGroup>
                        <SgInput
                            id='value'
                            name='value'
                            label='Value'
                            placeholder='Value'
                            value={selectedRow.value}
                            onChange={handleChange}
                        />
                    </SgFormGroup>

                    <SgButtonGroup
                        gap={true}
                    >
                        <SgButton
                            size='lg'
                            color='primary'
                            onClick={handleEditItem}
                        >
                            Edit
                        </SgButton>
                        <SgButton
                            size='lg'
                            color='error'
                            onClick={toggleEditItemModal}
                        >
                            Cancel
                        </SgButton>
                    </SgButtonGroup>
                </SgPopup>
            </SgPage>
        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <>
            <MainLayout>
                {page}
            </MainLayout>
        </>
    )
}