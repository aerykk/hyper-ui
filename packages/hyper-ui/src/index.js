import * as directives from './directives'
import Vue from 'vue'
//TODO I think we should install it
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// export const ActivityBlock = require('./components/activity-block')
// export const ActivityChart = require('./components/activity-chart')
// export const AddCollectionPopup = null
// export const AddFriends = null
// export const AddFriendsPopup = require('./components/add-friends')
// export const AnnouncementPopup = require('./components/announcement-popup')
// export const ArrayView = require('./components/json-editor/array-view')
// export const AssetPopup = null
// export const AssetsGrid = require('./components/assets-grid')
// export const AssetsImporter = require('./components/asset-importer')
// export const AssetsList = require('./components/assets-list-item/featured-list')
// export const AssetsListDetail = require('./components/assets-list-item')
// export const AssetsPreview = require('./components/asset/preview')
// export const AssetsStoreCard = require('./components/asset/store-card')
// export const Author = require('./components/author')
// export const Badges = require('./components/project/badges')
// export const Banner = require('./components/banner')
// export const BasicPopup = require('./components/popups/basic')
// export const Benchmark = require('./components/benchmark')
// export const Block = require('./components/block')
// export const Breadcrumb = require('./components/breadcrumb')
// export const BrokenPage = require('./components/broken-page')
// export const BrowserUi = require('./components/browser-ui')
// export const Button = require('./components/buttons')
// export const ButtonArrows = require('./components/buttons/arrows')
// export const Buttons = require('./components/buttons')
// export const Card = require('./components/project/card')
// export const Carousel3d = require('./components/carousel-3d')
// export const Chat = require('./components/chat/chat')
// export const ChatAnswer = require('./components/chat-new/answer-field/field')
// export const ChatBase = require('./components/chat-new/base')
// export const ChatFriendsList = null
// export const ChatGroup = require('./components/chat-new/content/group')
// export const ChatGroupNew = null
// export const ChatGroupSidebar = require('./components/chat-new/content/group-list')
// export const ChatGroupWelcome = null
// export const ChatMessage = require('./components/chat-new/message')
// export const ChatMessageSmall = require('./components/chat-new/message-small')
// export const ChatPrivate = null
// export const ChatUser = require('./components/chat-new/user')
// export const Checkbox = require('./components/checkbox')
// export const CheckboxGroup = require('./components/checkbox/group')
// export const Claim = require('./components/claim')
// export const Clock = require('./components/clock')
// export const CollectionItem = require('./components/collection/item')
// export const CollectionList = require('./components/collection/list')
// export const CommunitySpotlight = require('./components/community-spotlight')
// export const ContentNavigation = null
// export const ContributeForm = require('./components/contribute/form')
// export const ContributePledge = require('./components/contribute/pledge')
// export const ContributorBox = require('./components/contributor-box')
// export const CookiePolicy = require('./components/cookie-policy')
// export const CuratorInfo = require('./components/curator-panel/info-card')
// export const CuratorPanel = require('./components/curator-panel')
// export const CuratorReview = require('./components/curator-review')
// export const CuratorReviews = null
// export const CuratorsReviews = require('./components/curator-reviews')
// export const CurrencyDropdown = null
// export const CustomModal = require('./components/modal/custom')
// export const DecentralizationMeter = null
// export const DottedList = require('./components/list/dots')
// export const DraggableVideo = require('./components/draggable-video')
// export const Dropdown = require('./components/dropdown-menu/type-2')
// export const Dropdown4 = require('./components/dropdown-menu/type-4')
// export const DropdownCurrency = require('./components/dropdown-menu/currency')
// export const DropdownCustom = require('./components/dropdown-menu/type-3')
// export const DropdownLang = require('./components/dropdown-menu/language')
// export const DropdownMenu = require('./components/dropdown-menu/type-2')
// export const DropdownPost = require('./components/dropdown-menu')
// export const Emoji = require('./components/emoji')
// export const EmojiSingle = require('./components/emoji/single')
// export const ExchangeBar = require('./components/list/exchange-bar')
// export const FTradedAssets = require('./components/frequently-traded-assets')
// export const GameCard = require('./components/game-card')
// export const GameDescription = require('./components/game-series/game-description')
// export const GameIncludesItem = require('./components/game-series/game-includes-item')
// export const GameIncludesList = require('./components/game-series/game-includes-list')
// export const GameInstaller = null
// export const GameLibraryCard = null
// export const GamePlan = require('./components/game-plans/plan')
// export const GameSeries = require('./components/game-series')
// export const GamesExplorer = require('./components/games-explorer')
// export const GamesGrid = require('./components/game-grid/with-description')
// export const GamesGridSimple = require('./components/game-grid/simple')
// export const GamesList = null
// export const GiftBox = require('./components/gift-box')
// export const Giphy = require('./components/giphy')
// export const GlobalSearch = require('./components/global-search')
// export const Guide = require('./components/guide')
// export const Heading = require('./components/heading')
// export const HeadingBar = require('./components/heading-bar')
// export const HeadingBarWithAdditionalAction = require('./components/heading-bar/additional-action')
// export const HeadingBarWithSimpleColor = require('./components/heading-bar/simple-colored')
// export const Icon = require('./components/icon')
// export const ImagesExplorer = require('./components/images-explorer')
// export const Img = require('./components/img')
// export const InfiniteContent = require('./components/infinite-content')
// export const Input = require('./components/inputs')
// export const InputSearcher = require('./components/inputs/searcher')
// export const JoinCommunity = require('./components/join-community')
// export const JsonView = require('./components/json-editor/json-view')
// export const Landing = require('./components/landing')
// export const LandingBenefactor = require('./components/landing/benefactor')
// export const LandingBlock = null
// export const LandingBlockContentLevel = require('./components/landing/block-content/level')
// export const LandingBlockContentWithFeatureItem = require('./components/landing/block-content/feature-item')
// export const LandingBlockTitle = require('./components/landing/block-title/simple')
// export const LandingBlockTitleGradient = require('./components/landing/block-title/gradient')
// export const LandingBlockTitleShadow = require('./components/landing/block-title/shadow')
// export const LandingButton = null
// export const LandingContent = require('./components/landing/block-content/simple')
// export const LandingDivider = require('./components/landing/divider')
// export const LandingFeatureItem = null
// export const LandingGradientBlock = null
// export const LandingLevel = require('./components/landing/level')
// export const LandingRewardList = require('./components/landing/block-content/reward-list')
// export const LandingSlider = null
// export const LandingTab = require('./components/landing/block-content/tab')
// export const LandingTabs = require('./components/landing/block-content/tabs')
// export const LandingTitle = require('./components/landing/block-title/simple')
// export const LandingTitleGradient = require('./components/landing/block-title/gradient')
// export const LandingTitleShadow = require('./components/landing/block-title/shadow')
// export const LanguageSupport = require('./components/product-overview/language-support')
// export const LanguagesDropdown = null
// export const LineChart = require('./components/charts/line')
// export const LoadMore = require('./components/buttons/load-more')
// export const LoadingCircle = require('./components/loading-bar/circle')
// export const LoadingIndicator = require('./components/loading-indicator')
// export const LoadingLine = require('./components/loading-bar')
// export const LogoLoader = require('./components/loading-bar/logo-loader')
// export const MetroGrid = require('./components/metro/grid')
// export const MetroItem = require('./components/metro/metro-item')
// export const MetroTile = require('./components/metro/metro-tile')
// export const Milestone = require('./components/project/milestone')
// export const MilestonesLine = require('./components/milestones-line')
// export const Modal = require('./components/modal/')
// export const ModalList = null
// export const MoneyInfo = require('./components/money-info')
// export const NewsArticle = require('./components/news-list/article')
// export const NewsList = require('./components/news-list/articles')
// export const NewsListNav = require('./components/news-list/navigation')
// export const NewsListNavigation = null
// export const Notification = require('./components/notification')
// export const NotificationInline = require('./components/notification/inline')
// export const OptionBlock = null
// export const Pagination = require('./components/pagination/index')
// export const ParticipationTier = require('./components/participation-tier')
// export const PlayPopup = null
// export const Popup = require('./components/popups')
// export const PricingTableV1 = require('./components/pricing-table/v1')
// export const PricingTableV2 = require('./components/pricing-table/v2')
// export const ProModeButton = require('./components/pro-mode/button')
// export const ProModeN1 = require('./components/pro-mode/notice1')
// export const ProModeN2 = require('./components/pro-mode/notice2')
// export const ProductCard = require('./components/product-card/product-card')
// export const ProductCardDynamic = require('./components/product-card/product-card-dynamic')
// export const ProductCommunity = require('./components/community/post-item')
// export const ProductCommunityComment = require('./components/community/comment')
// export const ProductCommunityPost = null
// export const ProductCommunityReply = require('./components/community/reply')
// export const ProductReview = require('./components/review')
// export const ProductReviewForm = require('./components/review/create')
// export const ProductsCards = require('./components/product-card/product-cards')
// export const ProfileChooser = require('./components/profile-chooser')
// export const ProfilePicker = require('./components/profile-picker')
// export const ProgressBar = require('./components/progress-bar')
// export const ProgressBarFancy = require('./components/progress-bar/fancy')
// export const ProjectCard = require('./components/project/card')
// export const ProjectMilestone = require('./components/project/milestone')
// export const PromotionBoxItem = require('./components/promotion-box/item')
// export const PromotionBoxList = require('./components/promotion-box/list')
// export const PurchaseBlock = require('./components/purchase-block')
// export const PurchaseOption = require('./components/purchase-option')
// export const QrCode = require('./components/tooltip/qr-code')
// export const QuickLaunch = require('./components/quick-launch')
// export const RangeSlider = require('./components/range-slider/pure')
// export const RatingBlock = require('./components/rating-block')
// export const RatingStars = require('./components/rating-stars')
// export const RecommendationBlock = require('./components/infinite-content/recommendation-block')
// export const RenderCondition = require('./components/render-condition')
// export const Review = require('./components/review')
// export const ReviewForm = null
// export const ScreenGallery = require('./components/screen-gallery/gallery')
// export const ScrollableContent = require('./components/chat-new/content/scrollable-content')
// export const SearchBar = null
// export const Searcher = require('./components/searcher')
// export const SecurityCheck = require('./components/security-check')
// export const SendingFundsPopup = null
// export const Settings = null
// export const Share = require('./components/share/type-1')
// export const SidebarMenu = require('./components/sidebar-menu')
// export const SidebarMenuItem = require('./components/sidebar-menu/menu-item')
// export const SimpleBanner = require('./components/banner/simple')
// export const SimpleBlock = require('./components/block/simple')
// export const SimpleTable = require('./components/table-simple')
// export const Slide = null
// export const SocialConnect = require('./components/social-connect')
// export const Spinner = require('./components/spinner')
// export const StatusDot = require('./components/status-dot')
// export const StreamCarousel = require('./components/stream/carousel')
// export const StreamItem = require('./components/stream')
// export const Swiper = null
// export const SystemRequirements = require('./components/product-overview/system-requirements')
// export const Tab = require('./components/tab/tab')
// export const Tabs = require('./components/tab/tabs')
// export const Tags = require('./components/tags')
// export const TagsCount = require('./components/tags-count')
// export const TermsPopup = require('./components/popups/terms')
// export const TextFormatting = require('./components/text-formatting')
// export const TextLabel = require('./components/text-label')
// export const TimelineItem = require('./components/timeline/item')
// export const TimelineList = require('./components/timeline/list')
// export const Toggle = require('./components/toggle')
// export const Tooltip = require('./components/tooltip/universal')
// export const TooltipUniversal = require('./components/tooltips/universal')
// export const Tooltips = require('./components/tooltips')
// export const TradeOffer = require('./components/trade-offer')
// export const TradedAssets = null
// export const Twitch = require('./components/twitch')
// export const UpdatesCount = require('./components/project/updates-count')
// export const UserCard = require('./components/user-card')
// export const Video = require('./components/video')
// export const VideoList = require('./components/video-list')
// export const ViewReview = null
// export const Vote = require('./components/vote')
// export const WalletDeposit = require('./components/wallet/deposit')
// export const WalletTransfer = require('./components/wallet/transfer')
// export const WelcomeBox = require('./components/welcome-box')
// export const Youtube = require('./components/youtube')


export const Swiper = swiper
export const SwiperSlide = swiperSlide
export const PromotionBoxItem = require('./components/promotion-box/item')
export const PromotionBoxList = require('./components/promotion-box/list')
export const Notification = require('./components/notification')
export const NotificationInline = require('./components/notification/inline')
export const AssetsImporter = require('./components/asset-importer')
export const Searcher = require('./components/searcher')
export const RatingStars = require('./components/rating-stars')
export const RatingBlock = require('./components/rating-block')
export const Author = require('./components/author')
export const Tags = require('./components/tags')
export const StatusDot = require('./components/status-dot')
export const LoadingLine = require('./components/loading-bar')
export const LoadingCircle = require('./components/loading-bar/circle')
export const Card = require('./components/project/card')
export const Badges = require('./components/project/badges')
export const Milestone = require('./components/project/milestone')
export const UpdatesCount = require('./components/project/updates-count')
export const Tabs = require('./components/tab/tabs')
export const Tab = require('./components/tab/tab')
export const SystemRequirements = require('./components/product-overview/system-requirements')
export const MilestonesLine = require('./components/milestones-line')
export const SidebarMenu = require('./components/sidebar-menu')
export const SidebarMenuItem = require('./components/sidebar-menu/menu-item')
export const Buttons = require('./components/buttons')
export const LoadMore = require('./components/buttons/load-more')
export const ButtonArrows = require('./components/buttons/arrows')
export const MoneyInfo = require('./components/money-info')
export const Checkbox = require('./components/checkbox')
export const CheckboxGroup = require('./components/checkbox/group')
export const Tooltips = require('./components/tooltips')
export const TooltipUniversal = require('./components/tooltips/universal')
export const ActivityChart = require('./components/activity-chart')
export const PopUps = require('./components/popups')
export const BasicPopup = require('./components/popups/basic')
export const TermsPopup = require('./components/popups/terms')
export const PlayPopup = require('./components/popups/play')
export const AddCollectionPopup = require('./components/popups/add-collection')
export const MatureContentPopup = require('./components/popups/mature-content')
export const RangeSlider = require('./components/range-slider/pure')
export const AssetsGrid = require('./components/assets-grid')
export const Toggle = require('./components/toggle')
export const AssetsList = require('./components/assets-list-item/featured-list')
export const AssetsListDetail = require('./components/assets-list-item')
export const Block = require('./components/block')
export const SimpleBlock = require('./components/block/simple')
export const CustomModal = require('./components/modal/custom')
export const Modal = require('./components/modal/')
export const Dropdown = require('./components/dropdown')
export const DropdownCustom = require('./components/dropdown-menu/type-3')
export const DropdownPost = require('./components/dropdown-menu/index')
export const DropdownCurrency = require('./components/dropdown-menu/currency')
export const DropdownLang = require('./components/dropdown-menu/language')
export const DropdownMenu = require('./components/dropdown-menu/type-2')
export const FTradedAssets = require('./components/frequently-traded-assets/index')
export const GamePlan = require('./components/game-plans/plan')
export const GamesGrid = require('./components/game-grid/with-description')
export const GamesGridSimple = require('./components/game-grid/simple')
export const HeadingBar = require('./components/heading-bar/index')
export const HeadingBarWithSimpleColor = require('./components/heading-bar/simple-colored')
export const HeadingBarWithAdditionalAction = require('./components/heading-bar/additional-action')
export const NewsListNav = require('./components/news-list/navigation')
export const NewsList = require('./components/news-list/articles')
export const NewsArticle = require('./components/news-list/article')
export const Pagination = require('./components/pagination/index')
export const ProductCommunity = require('./components/community/post-item')
export const ProductCommunityComment = require('./components/community/comment')
export const ProductCommunityReply = require('./components/community/reply')
export const ProductCommunityPost = require('./components/community/post-item')
export const ProjectCard = require('./components/project/card')
export const UserCard = require('./components/user-card')
export const ScreenGallery = require('./components/screen-gallery/gallery')
export const ProductCardDynamic = require('./components/product-card/product-card-dynamic')
export const ProductCard = require('./components/product-card/product-card')
export const ProductsCards = require('./components/product-card/product-cards')
export const CuratorReview = require('./components/curator-review')
export const CuratorReviews = require('./components/curator-reviews')
export const ImagesExplorer = require('./components/images-explorer')
export const CollectionItem = require('./components/collection/item')
export const CollectionList = require('./components/collection/list')
export const GameSeries = require('./components/game-series')
export const GameDescription = require('./components/game-series/game-description')
export const GameIncludesList = require('./components/game-series/game-includes-list')
export const GameIncludesItem = require('./components/game-series/game-includes-item')
export const ProgressBar = require('./components/progress-bar')
export const ProgressBarFancy = require('./components/progress-bar/fancy')
export const ProjectMilestone = require('./components/project/milestone')
export const CommunitySpotlight = require('./components/community-spotlight')
export const ProductReview = require('./components/review')
export const ProductReviewForm = require('./components/review/create')
export const ProductViewReview = require('./components/review/view')
export const Banner = require('./components/banner')
export const LanguageSupport = require('./components/product-overview/language-support')
export const Input = require('./components/inputs')
export const InputSearcher = require('./components/inputs/searcher')
export const TimelineList = require('./components/timeline/list')
export const TimelineItem = require('./components/timeline/item')
export const PurchaseBlock = require('./components/purchase-block')
export const PurchaseOption = require('./components/purchase-option')
export const OptionTag = require('./components/option-tag')
export const ParticipationTier = require('./components/participation-tier')
export const ContributeForm = require('./components/contribute/form')
export const ContributePledge = require('./components/contribute/pledge')
export const CookiePolicy = require('./components/cookie-policy')
export const WelcomeBox = require('./components/welcome-box')
export const Share = require('./components/share/type-1')
export const StreamItem = require('./components/stream')
export const List = require('./components/list')
export const DottedList = require('./components/list/dots')
export const GameInstallerModal = require('./components/game-installer')
export const Emoji = require('./components/emoji')
export const EmojiSingle = require('./components/emoji/single')
export const Landing = require('./components/landing')
export const LandingBlockTitle = require('./components/landing/block-title/simple')
export const LandingBlockTitleShadow = require('./components/landing/block-title/shadow')
export const LandingBlockDivider = require('./components/landing/block-content/divider')
export const LandingBlockTitleGradient = require('./components/landing/block-title/gradient')
export const LandingContent = require('./components/landing/block-content/simple')
export const SimpleBanner = require('./components/banner/simple')
export const ProfileChooser = require('./components/profile-chooser')
export const Popup = require('./components/popups')
export const LogoLoader = require('./components/loading-bar/logo-loader')
export const QuickLaunch = require('./components/quick-launch')
export const Dropdown4 = require('./components/dropdown-menu/type-4')
export const CuratorPanel = require('./components/curator-panel')
export const CuratorInfo = require('./components/curator-panel/info-card')
export const JoinCommunity = require('./components/join-community')
export const Chat = require('./components/chat/chat')
export const ChatAnswer = require('./components/chat-new/answer-field/field')
export const ChatMessageSmall = require('./components/chat-new/message-small')
export const ScrollableContent = require('./components/chat-new/content/scrollable-content')
export const ChatBase = require('./components/chat-new/base')
export const ChatMessage = require('./components/chat-new/message')
export const ChatUser = require('./components/chat-new/user')
export const ChatGroupSidebar = require('./components/chat-new/content/group-list')
export const ChatGroup = require('./components/chat-new/content/group')
export const ArrayView = require('./components/json-editor/array-view')
export const Breadcrumb = require('./components/breadcrumb')
export const Button = require('./components/buttons')
export const ButtonFav = require('./components/buttons/favorite')
export const Icon = require('./components/icon')
export const Img = require('./components/img')
export const JsonView = require('./components/json-editor/json-view')
export const LoadingIndicator = require('./components/loading-indicator')
export const Spinner = require('./components/spinner')
export const Vote = require('./components/vote')
export const IdeaCard = require('./components/idea-card')
export const RenderCondition = require('./components/render-condition')
export const ProModeButton = require('./components/pro-mode/button')
export const ProModeN1 = require('./components/pro-mode/notice1')
export const ProModeN2 = require('./components/pro-mode/notice2')
export const PricingTableV1 = require('./components/pricing-table/v1')
export const PricingTableV2 = require('./components/pricing-table/v2')
export const Video = require('./components/video')
export const DraggableVideo = require('./components/draggable-video')

export const WalletBase = require('./components/wallet/base.vue')
export const WalletMain = require('./components/wallet')
export const WalletTransfer = require('./components/wallet/transfer')
export const WalletDeposit = require('./components/wallet/deposit')
export const WalletEdit = require('./components/wallet/account-edit')

export const Header = require('./components/headers/basic')
export const SlimHeader = require('./components/headers/slim')

export const PrivacyPopup = require('./components/privacy-popup')
export const WelcomePopup = require('./components/welcome-popup')
export const DownloadPopup = require('./components/download-popup')
export const UnlockPopup = require('./components/unlock-popup')
export const LoginPopup = require('./components/login-popup')
export const RegisterPopup = require('./components/register-popup')
export const SendFundsPopup = require('./components/send-funds-popup')
export const PurchasePopup = require('./components/purchase-popup')
export const MissionControlPopup = require('./components/mission-control-popup')
export const Clock = require('./components/clock')
export const Sidepanel = require('./components/sidepanel')
export const QrCode = require('./components/qr-code')
export const ShortcutSidebar = require('./components/shortcut-sidebar')
export const ShortcutIcon = require('./components/shortcut-icon')
export const ShortcutGrid = require('./components/shortcut-grid')
export const ShortcutGridItem = require('./components/shortcut-grid-item')

export const Settings = require('./components/settings')
export const SocialConnect = require('./components/social-connect')

export const LoadingLogo = require('./components/loading-bar/logo-loader')
export const CurrencyDropdown = require('./components/dropdown-menu/currency')
export const LanguageDropdown = require('./components/dropdown-menu/language')

export const ImageOverlay = require('./components/image-overlay')
export const ProductCards = require('./components/product-card/product-cards')
export const ProductSlider = require('./components/product-slider')
export const GameGrid = require('./components/game-grid/simple')
export const ContentNavigation = require('./components/content-navigation')
export const AssetsListItem = require('./components/assets-list-item')
export const NewsListNavigation = require('./components/news-list/navigation')
export const NewsListArticles = require('./components/news-list/articles')
export const GamesExplorer = require('./components/games-explorer')
export const AssetsExplorer = require('./components/assets-explorer')
export const DownloadBlock = require('./components/download-block')
export const HeadingBarFields = require('./components/heading-bar')
export const TermsBlock = require('./components/heading-bar')
export const PrivacyBlock = require('./components/heading-bar')
export const Loading = require('./components/loading-indicator')
export const Message = require('./components/message')
export const Drawer = require('./components/drawer')
export const SimpleTable = require('./components/table-simple')
export const SendingFundsPopup = require('./components/send-funds-popup')
export const TextFormatting = require('./components/text-formatting')
export const TokenSale = require('./components/token-sale-box')
export const Guide = require('./components/guide')
export const VideoPopup = require('./components/video-popup')
export const Youtube = require('./components/youtube')
// export const InfiniteContent = require('./components/infinite-content')
