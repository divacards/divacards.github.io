import Cardback from "../../assets/cardback.svg";
import Joker from "../../assets/joker.svg";
import SpadeAce from "../../assets/spade_ace.svg";
import SpadeTwo from "../../assets/spade_2.svg";
import SpadeThree from "../../assets/spade_3.svg";
import SpadeFour from "../../assets/spade_4.svg";
import SpadeFive from "../../assets/spade_5.svg";
import SpadeSix from "../../assets/spade_6.svg";
import SpadeSeven from "../../assets/spade_7.svg";
import SpadeEight from "../../assets/spade_8.svg";
import SpadeNine from "../../assets/spade_9.svg";
import SpadeTen from "../../assets/spade_10.svg";
import SpadeJack from "../../assets/spade_jack.svg";
import SpadeKing from "../../assets/spade_king.svg";
import SpadeQueen from "../../assets/spade_queen.svg";
import HeartAce from "../../assets/heart_ace.svg";
import HeartTwo from "../../assets/heart_2.svg";
import HeartThree from "../../assets/heart_3.svg";
import HeartFour from "../../assets/heart_4.svg";
import HeartFive from "../../assets/heart_5.svg";
import HeartSix from "../../assets/heart_6.svg";
import HeartSeven from "../../assets/heart_7.svg";
import HeartEight from "../../assets/heart_8.svg";
import HeartNine from "../../assets/heart_9.svg";
import HeartTen from "../../assets/heart_10.svg";
import HeartJack from "../../assets/heart_jack.svg";
import HeartKing from "../../assets/heart_king.svg";
import HeartQueen from "../../assets/heart_queen.svg";
import ClubAce from "../../assets/club_ace.svg";
import ClubTwo from "../../assets/club_2.svg";
import ClubThree from "../../assets/club_3.svg";
import ClubFour from "../../assets/club_4.svg";
import ClubFive from "../../assets/club_5.svg";
import ClubSix from "../../assets/club_6.svg";
import ClubSeven from "../../assets/club_7.svg";
import ClubEight from "../../assets/club_8.svg";
import ClubNine from "../../assets/club_9.svg";
import ClubTen from "../../assets/club_10.svg";
import ClubJack from "../../assets/club_jack.svg";
import ClubKing from "../../assets/club_king.svg";
import ClubQueen from "../../assets/club_queen.svg";
import DiamondAce from "../../assets/diamond_ace.svg";
import DiamondTwo from "../../assets/diamond_2.svg";
import DiamondThree from "../../assets/diamond_3.svg";
import DiamondFour from "../../assets/diamond_4.svg";
import DiamondFive from "../../assets/diamond_5.svg";
import DiamondSix from "../../assets/diamond_6.svg";
import DiamondSeven from "../../assets/diamond_7.svg";
import DiamondEight from "../../assets/diamond_8.svg";
import DiamondNine from "../../assets/diamond_9.svg";
import DiamondTen from "../../assets/diamond_10.svg";
import DiamondJack from "../../assets/diamond_jack.svg";
import DiamondKing from "../../assets/diamond_king.svg";
import DiamondQueen from "../../assets/diamond_queen.svg";
import Chest from "../../assets/pirates/chest.svg";

const cardDict = {
    "cardback": Cardback,
    "spade_ace": SpadeAce,
    "spade_2": SpadeTwo,
    "spade_3": SpadeThree,
    "spade_4": SpadeFour,
    "spade_5": SpadeFive,
    "spade_6": SpadeSix,
    "spade_7": SpadeSeven,
    "spade_8": SpadeEight,
    "spade_9": SpadeNine,
    "spade_10": SpadeTen,
    "spade_jack": SpadeJack,
    "spade_king": SpadeKing,
    "spade_queen": SpadeQueen,
    "heart_ace": HeartAce,
    "heart_2": HeartTwo,
    "heart_3": HeartThree,
    "heart_4": HeartFour,
    "heart_5": HeartFive,
    "heart_6": HeartSix,
    "heart_7": HeartSeven,
    "heart_8": HeartEight,
    "heart_9": HeartNine,
    "heart_10": HeartTen,
    "heart_jack": HeartJack,
    "heart_king": HeartKing,
    "heart_queen": HeartQueen,
    "club_ace": ClubAce,
    "club_2": ClubTwo,
    "club_3": ClubThree,
    "club_4": ClubFour,
    "club_5": ClubFive,
    "club_6": ClubSix,
    "club_7": ClubSeven,
    "club_8": ClubEight,
    "club_9": ClubNine,
    "club_10": ClubTen,
    "club_jack": ClubJack,
    "club_king": ClubKing,
    "club_queen": ClubQueen,
    "diamond_ace": DiamondAce,
    "diamond_2": DiamondTwo,
    "diamond_3": DiamondThree,
    "diamond_4": DiamondFour,
    "diamond_5": DiamondFive,
    "diamond_6": DiamondSix,
    "diamond_7": DiamondSeven,
    "diamond_8": DiamondEight,
    "diamond_9": DiamondNine,
    "diamond_10": DiamondTen,
    "diamond_jack": DiamondJack,
    "diamond_king": DiamondKing,
    "diamond_queen": DiamondQueen,
    "joker": Joker,
    "chest": Chest
}

export const getCardAsset = (keyword) => {
    return cardDict[keyword]
};
