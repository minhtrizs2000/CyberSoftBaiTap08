/**
 * HOMEWORK 1
 * 
 * 
 * khối 1: input
 * num1, num2, num3
 * 
 * khối 2: 
 * _b1: khai báo, gán giá trị cho các biến input
 * _b2: sắp xếp
 *          nếu: num1 <= num2 && num1 <= num3
 *              nếu: num2 <= num3
 *                  thì: num1 => num2 => num3
 *              ngược lại: num1 => num3 => num2
 * 
 *          nếu: num2 <= num1 && num2 <= num3
 *              nếu: num1 <= num3
 *                  thì: num2 => num1 => num3
 *              ngược lại: num2 => num3 => num1
 * 
 *          nếu: num3 <= num2 && num3 <= num1
 *              nếu: num2 <= num1
 *                  thì: num3 => num2 => num1
 *              ngược lại: num3 => num1 => num2
 * 
 * khối 3:
 * KQ
 */

document.getElementById("btnSort").onclick = function () {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value)
    var num3 = parseInt(document.getElementById("num3").value)


    var sort = "";
    var KQ = document.getElementById("txtSortResult");

    if (num1 <= num2 && num1 <= num3) {
        if (num2 <= num3) {
            sort = num1 + " => " + num2 + " => " + num3;
        } else {
            sort = num1 + " => " + num3 + " => " + num2;
        }
    } else if (num2 <= num1 && num2 <= num3) {
        if (num1 <= num3) {
            sort = num2 + " => " + num1 + " => " + num3;
        } else {
            sort = num2 + " => " + num3 + " => " + num1;
        }
    } else if (num3 <= num1 && num3 <= num2) {
        if (num1 <= num2) {
            sort = num3 + " => " + num1 + " => " + num2;
        } else {
            sort = num3 + " => " + num2 + " => " + num1;
        }
    } else {
        sort = "Có lỗi xảy ra!";
    }


    KQ.innerHTML = sort;
}


/**
 * HOMEWORK 2
 * 
 * 
 * khối 1: input
 * person
 * 
 * khối 2: 
 * _b1: khai báo, gán giá trị cho các biến input
 * _b2: nhận diện
 *          nếu person = "B"
 *              thì kq = xin chào bố 
 *          nếu person = "M"
 *              thì kq = xin chào mẹ 
 *          nếu person = "A"
 *              thì kq = xin chào anh trai 
 *          nếu person = "E"
 *              thì kq = xin chào em gái 
 *          else
 *              vui lòng chọn lại người sử dụng máy.
 * 
 * khối 3:
 * KQ
 */

document.getElementById("btnHello").onclick = function () {
    var person = document.getElementById("selectPerson").value;

    var hello = "";
    var KQ = document.getElementById("txtHello");
    if (person == "B") {
        hello = "xin chào bố";
    } else if (person == "M") {
        hello = "xin chào mẹ";
    } else if (person == "A") {
        hello = "xin chào anh trai";
    } else if (person == "E") {
        hello = "xin chào em gái";
    } else {
        hello = "vui lòng chọn lại người sử dụng máy."
    }

    KQ.innerHTML = hello;
}


/**
 * HOMEWORK 3
 * 
 * 
 * khối 1: input
 * oddNum1, oddNum2, oddNum3
 * 
 * khối 2: 
 * _b1: khai báo, gán giá trị cho các biến input
 * _b2: Lọc kq
 *          if(oddNum1 % 2 == 0)
 *              even += " " + oddNum1;
 *          else
 *              odd += " " + oddNum1;
 *          if(oddNum2 % 2 == 0)
 *              even += " " + oddNum2;
 *          else
 *              odd += " " + oddNum2;
 *          if(oddNum3 % 2 == 0)
 *              even += " " + oddNum3;
 *          else
 *              odd += " " + oddNum3;
 * 
 * khối 3:
 * odd
 * even
 */

document.getElementById("btnFilter").onclick = function () {
    var oddNum1 = document.getElementById("oddNum1").value;
    var oddNum2 = document.getElementById("oddNum2").value;
    var oddNum3 = document.getElementById("oddNum3").value;

    var odd = " ";
    var even = " ";
    var countOdd = 0;
    var countEven = 0;

    if (oddNum1 % 2 == 0) {
        even += " " + oddNum1;
        countEven++;
    } else {
        odd += " " + oddNum1;
        countOdd++;
    }
    if (oddNum2 % 2 == 0) {
        even += " " + oddNum2;
        countEven++;
    } else {
        odd += " " + oddNum2;
        countOdd++;
    }
    if (oddNum3 % 2 == 0) {
        even += " " + oddNum3;
        countEven++;
    } else {
        odd += " " + oddNum3;
        countOdd++;
    }

    var KQ = document.getElementById("txtFilterResult").innerHTML = "Có " + countOdd + " số lẻ: " + odd + "<br>Có " + countEven + " số Chẵn: " + even;

}


/**
 * HOMEWORK 4
 * 
 * 
 * khối 1: input
 * edge1, edge2, edge3
 * 
 * khối 2: 
 * _b1: khai báo, gán giá trị cho các biến input
 * _b2: so sánh 3 cạnh tam giác
 * 
 *          if (edge1 == edge2 && edge1 == edge3) {
 *              Tam giác đều
 *          } else if (edge1 == edge2 || edge1 == n3 || edge2 == edge3) {
 *              Tam giác cân
 *          } else if (edge1*edge1 == (edge2*edge2 + edge3*edge3) || edge2*edge2 == (edge1*edge1 + edge3*edge3) || edge3*edge3 == (edge2*edge2 + edge1*edge1) ) {
 *              Tam giác vuông
 *          } else {
 *              Tam giác thường
 *          }
 * 
 * khối 3:
 * KQ
 */


document.getElementById("btnTriangle").onclick = function () {
    var edge1 = document.getElementById("edge1").value;
    var edge2 = document.getElementById("edge2").value;
    var edge3 = document.getElementById("edge3").value;

    var triangle = "";

    if (edge1 == edge2 && edge1 == edge3) {
        triangle = "Tam giác đều";
    } else if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
        triangle = "Tam giác cân";
    } else if (edge1 * edge1 == (edge2 * edge2 + edge3 * edge3) || edge2 * edge2 == (edge1 * edge1 + edge3 * edge3) || edge3 * edge3 == (edge2 * edge2 + edge1 * edge1)) {
        triangle = "Tam giác vuông";
    } else {
        triangle = "Tam giác thường";
    }

    var KQ = document.getElementById("txtTriangleResult").innerHTML = triangle;
}


/**
 * HOMEWORK 4
 * 
 * 
 * khối 1: input
 * day, month, year
 * 
 * khối 2: 
 * _b1: khai báo, gán giá trị cho các biến input
 * _b2: 
 *       preMonth = month;
 *       preYear = year;
 *       nextMonth = month;
 *       nextYear = year;
 * 
 *       swich(month)
 *          case "1":
 *             if(day==1){
 *                preDay = 31;
 *                preMonth = 12;
 *                preYear = year--;
 * 
 *                nextDay = 2;
 * 
 *             }else if(day > 1 && day < 31){
 *                preDay = day--;
 *                
 *                nextDay = day++;
 * 
 *             }else if(day == 31){
 *                preDay = 30;
 * 
 *                nextDay = 1;
 *                nextMonth = month++;
 * 
 *             }else{
 *                console.log("Nhập sai ngày (chỉ từ 1 đến 31) ");
 *             }
 * 
 * 
 * khối 3:
 * preDay, preMonth, preYear
 * nextDay, nextMonth, NextYear
 */


document.getElementById("btnDate").onclick = function () {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var nextDay = 0;
    var nextMonth = month;
    var nextYear = year;

    var preDay = 0;
    var preMonth = month;
    var preYear = year;

    var KQ = "";

    switch (month) {
        case 1:
            if (day == 1) {
                preDay = 31;
                preMonth = 12;
                preYear = year - 1;

                nextDay = 2;

            } else if (day > 1 && day < 31) {
                preDay = day - 1;

                nextDay = day + 1;

            } else if (day == 31) {
                preDay = 30;

                nextDay = 1;
                nextMonth = month + 1;

            } else {
                KQ = "Nhập sai ngày (1 đến 31) ";
            }
            break;

        case 2:
            if (day == 1) {
                preDay = 31;
                preMonth = 1;

                nextDay = 2;

            } else if (day > 1 && day < 28) {
                preDay = day - 1;

                nextDay = day + 1;

            } else if (day == 28) {
                preDay = day - 1;

                nextDay = 1;
                nextMonth = month + 1;

            } else {
                KQ = "Nhập sai ngày (1 đến 28) ";
            }
            break;

        case 3:
            if (day == 1) {
                preDay = 28;
                preMonth = month - 1;

                nextDay = 2;

            } else if (day > 1 && day < 31) {
                preDay = day - 1;

                nextDay = day + 1;

            } else if (day == 31) {
                preDay = day - 1;;

                nextDay = 1;
                nextMonth = month + 1;

            } else {
                KQ = "Nhập sai ngày (1 đến 31) ";
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            if (day == 1) {
                preDay = 31;
                preMonth = month - 1;

                nextDay = 2;

            } else if (day > 1 && day < 30) {
                preDay = day - 1;

                nextDay = day + 1;

            } else if (day == 30) {
                preDay = day - 1;;

                nextDay = 1;
                nextMonth = month + 1;

            } else {
                KQ = "Nhập sai ngày (1 đến 30) ";
            }
            break;

        case 5:
        case 7:
        case 10:
            if (day == 1) {
                preDay = 30;
                preMonth = month - 1;

                nextDay = 2;

            } else if (day > 1 && day < 31) {
                preDay = day - 1;

                nextDay = day + 1;

            } else if (day == 31) {
                preDay = day - 1;;

                nextDay = 1;
                nextMonth = month + 1;

            } else {
                KQ = "Nhập sai ngày (1 đến 31) ";
            }
            break;

        case 8:
            if (day == 1) {
                preDay = 31;
                preMonth = month - 1;

                nextDay = 2;

            } else if (day > 1 && day < 31) {
                preDay = day - 1;

                nextDay = day + 1;

            } else if (day == 31) {
                preDay = day - 1;;

                nextDay = 1;
                nextMonth = month + 1;

            } else {
                KQ = "Nhập sai ngày (1 đến 31) ";
            }
            break;
        
        case 12:
            if (day == 1) {
                preDay = 30;
                preMonth = month - 1;

                nextDay = 2;

            } else if (day > 1 && day < 31) {
                preDay = day - 1;

                nextDay = day + 1;

            } else if (day == 31) {
                preDay = day - 1;;

                nextDay = 1;
                nextMonth = 1;
                nextYear = year + 1;

            } else {
                KQ = "Nhập sai ngày (1 đến 31) ";
            }
            break;
        default:
            KQ = "Nhập sai ngày (1 đến 31) ";
    }
    console.log("Hôm nay : ngày " + day + " tháng " + month + " năm " + year);
    console.log("Hôm qua : ngày " + preDay + " tháng " + preMonth + " năm " + preYear);
    console.log("Ngày mai: ngày " + nextDay + " tháng " + nextMonth + " năm " + nextYear);

    document.getElementById("txtDateResult").innerHTML = "Hôm nay : ngày " + day + " tháng " + month + " năm " + year + "<hr><br>Hôm qua : ngày " + preDay + " tháng " + preMonth + " năm " + preYear + "<hr><br>Ngày mai: ngày " + nextDay + " tháng " + nextMonth + " năm " + nextYear;

}