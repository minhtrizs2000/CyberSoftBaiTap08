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
 * ADVANCE 1
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



/**
 * ADVANCE 2
 * 
 * 
 * khối 1: input
 * month, year
 * 
 * khối 2: 
 * _b1: khai báo, gán giá trị cho các biến input
 * _b2: 
 *      Kiểm tra năm nhuận:
 * 
 *          Nếu năm % 100 == 0
 *              nếu năm % 400 == 0 => năm nhuận
 *              ngược lại năm k phải năm nhuận
 *          ngược lại
 *              nếu năm % 4 == 0 => năm nhuận
 *              ngược lại năm k phải năm nhuận
 * 
 *      nếu năm nhuận == true && tháng == 2
 *          ngày = 29
 *      ngược lại
 *          switch(thang)
 *              case 1
 * 
 * khối 3:
 * ngay
 */


document.getElementById("btnDayOfMonth").onclick = function(){
    var month = parseInt(document.getElementById("domMonth").value);
    var year = document.getElementById("domYear").value;
    var leap = true;

    var day = 0;

    if(year % 100 == 0){
        if(year % 400 == 0){
            leap = true;
        }else{
            leap = false;
        }
    }else{
        if(year % 4 == 0){
            leap = true;
        }else{
            leap = false;
        }
    }


    if(leap == true && month == 2){
        day = 29;
    }else{
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = 31;
                break;

            case 2:
                day = 28;
                break;

            case 4:
            case 6:
            case 9:
            case 11:
                day = 30;
                break;

            default:
                console.log("Lỗi khi switch case tháng");
        }
    }

    document.getElementById("txtDayOfMonthResult").innerHTML = "Năm " + year +" là năm nhuận? " + leap + "<br>=> Tháng " + month + " có " + day + " ngày";
}



/**
 * ADVANCE 3
 * 
 * 
 * khối 1: input
 * num
 * 
 * khối 2: 
 * _b1: khai báo, gán giá trị cho các biến input
 * _b2: 
 *      tạo hàm đổi số thành chữ
 * 
 *      nếu num<100 || num>999 => số không hợp lệ
 *      nếu ten == 0 && unit == 0 => ...trăm
 *      nếu ten == 0 => ...trăm lẻ ...
 *      nếu ten == 1 => ...trăm mười ...
 *      nếu ten == 1 && unit == 5 => ...trăm mười lăm
 *      nếu unit == 5 =>...trăm...mươi lăm 
 *      nếu unit == 1 => ...trăm...mươi mốt
 *      else => ...trăm...mươi...
 * 
 * 
 * khối 3:
 * KQ
 */

document.getElementById("btnReadNum").onclick = function(){
    var num = parseInt(document.getElementById("readNum").value);
    var hund = Math.floor(num/100);
    var ten = Math.floor(num/10) % 10 ;
    var unit = num % 10;

    var KQ = "";
    console.log(hund, ten, unit);

    if(num < 100 || num > 999){
        KQ = "số không hợp lệ";
    }else if(ten == 0 && unit == 0){
        KQ = chuyenChu(hund) + " trăm ";
    }else if(ten == 0){
        KQ = chuyenChu(hund) + " trăm " + " lẻ " + chuyenChu(unit);
    }else if(ten == 1){
        KQ = chuyenChu(hund) + " trăm " + " mười " + chuyenChu(unit);
    }else if(ten == 1 && unit == 5){
        KQ = chuyenChu(hund) + " trăm " + " mười " + " lăm";
    }else if(unit == 5){
        KQ = chuyenChu(hund) + " trăm " + chuyenChu(ten) + " mươi " + " lăm";
    }else if(unit == 1){
        KQ = chuyenChu(hund) + " trăm " + chuyenChu(ten) + " mươi " + " mốt";
    }else{
        KQ = chuyenChu(hund) + " trăm " + chuyenChu(ten) + " mươi " + chuyenChu(unit);
    }

    document.getElementById("txtReadNumResult").innerHTML = KQ;
}

function chuyenChu(x){
    var so = "";

    switch(x){
        case 0:
            so = "";
            break;
        case 1:
            so = " một ";
            break;
        case 2:
            so = " hai ";
            break;
        case 3:
            so = " ba ";
            break;
        case 4:
            so = " bốn ";
            break;
        case 5:
            so = " năm ";
            break;
        case 6:
            so = " sáu ";
            break;
        case 7:
            so = " bảy ";
            break;
        case 8:
            so = " tám ";
            break;
        case 9:
            so = " chín ";
            break;
    }
    return so;
}

/**
 * ADVANCE 4
 * 
 * 
 * khối 1: input
 * tenSV1
 * x1, y1
 * 
 * tenSV2
 * x2, y2
 * 
 * tenSV3
 * x3, y3
 * 
 * xt, yt (tọa độ trường)
 * 
 * khối 2: 
 * _b1: khai báo, gán giá trị cho các biến input
 * _b2: 
 *      tạo hàm tính khoảng cách từ A -> B
 *      
 *      lấy 3 giá trị khoảng cách từ hàm tính kc
 * 
 *      so sánh 3 giá trị 
 * 
 *      nếu sv1 > sv2 && sv1 > sv3 => in ra sv1
 *      nếu sv2 > sv3 && sv2 > sv1 => in ra sv2
 *      nếu sv3 > sv1 && sv3 > sv2 => in ra sv3
 * 
 *      nếu sv1 == sv2 && sv1 > sv3 => in ra sv1 + sv2
 *      nếu sv1 == sv3 && sv1 > sv2 => in ra sv1 + sv3
 *      nếu sv2 == sv3 && sv2 > sv1 => in ra sv2 + sv3
 *      
 *      nếu sv1 == sv2 && sv1 == sv3 => in ra cả 3 sinh viên
 * 
 * khối 3:
 * tenSVXaNhat
 */

document.getElementById("btnDistance").onclick = function(){
    var name1 = document.getElementById("stu01").value;
    var x1 = parseInt(document.getElementById("stu01X").value);
    var y1 = parseInt(document.getElementById("stu01Y").value);

    var name2 = document.getElementById("stu02").value;
    var x2 = parseInt(document.getElementById("stu02X").value);
    var y2 = parseInt(document.getElementById("stu02Y").value);

    var name3 = document.getElementById("stu03").value;
    var x3 = parseInt(document.getElementById("stu03X").value);
    var y3 = parseInt(document.getElementById("stu03Y").value);

    var xt = parseInt(document.getElementById("schoolX").value);
    var yt = parseInt(document.getElementById("schoolY").value);

    var dis1 = disAB(x1,y1,xt,yt);
    var dis2 = disAB(x2,y2,xt,yt);
    var dis3 = disAB(x3,y3,xt,yt);

    if(dis1 > dis2 && dis1 > dis3){
        document.getElementById("txtDistanceResult").innerHTML = name1 + ": " + dis1;
    }else if(dis2 > dis1 && dis2 > dis3){
        document.getElementById("txtDistanceResult").innerHTML = name2 + ": " + dis2;
    }else if(dis3 > dis1 && dis3 > dis2){
        document.getElementById("txtDistanceResult").innerHTML = name3 + ": " + dis3;
    }else if(dis1 == dis2 && dis1 > dis3){
        document.getElementById("txtDistanceResult").innerHTML = name1 + " = " + name2 + ": " + dis1;
    }else if(dis1 == dis3 && dis1 > dis2){
        document.getElementById("txtDistanceResult").innerHTML = name1 + " = " + name3 + ": " + dis1;
    }else if(dis2 == dis3 && dis2 > dis1){
        document.getElementById("txtDistanceResult").innerHTML = name2 + " = " + name3 + ": " + dis2;
    }else if(dis1 == dis2 && dis1 == dis3){
        document.getElementById("txtDistanceResult").innerHTML = name1 + " = " + name2 + " = " + name3 + ": " + dis1;
    }else{
        document.getElementById("txtDistanceResult").innerHTML = "Lỗi khi kiểm tra khoảng cách xa nhất";
    }


}

function disAB(x1,y1,x2,y2){
    var khoanCach = 0;

    khoanCach = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

    return khoanCach;
}