import React, { useState, useEffect } from "react";
import styles from "./calendar.module.css";

const CustomCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState({
    name: "",
    key: "",
  });

  const [currenYear, setCurrentyear] = useState(new Date().getFullYear());

  function handleSelectMonth(m, i) {
    if (m === selectedMonth.name) {
      return;
    }
    setSelectedMonth({ ...selectedMonth, name: m, key: i });
  }
  // get number of days ina month.
  function getDaysInMonth(month) {
    if (selectedMonth.name) {
      const currenYear = new Date().getFullYear();

      return new Date(currenYear, month + 1, 0).getDate();
    }
  }

  const days = getDaysInMonth(selectedMonth.key);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <>
      <main className={styles.calendar_wrapper}>
        <MonthsList
          months={months}
          selectHandler={handleSelectMonth}
          selectedMonth={selectedMonth}
        />
      </main>
      {selectedMonth.name && (
        <DateDisplayer
          selectedMonth={selectedMonth.key}
          currenYear={currenYear}
          allMonths={months}
        />
      )}
    </>
  );
};

export default CustomCalendar;

//  display dates of a particular selected month
// this component takes selected month and currenty years as props
// rendered a calendar view
function DateDisplayer({ selectedMonth, currenYear, allMonths }) {
  const [daysList, setDays] = useState([]);

  const getMonthDayArray = (month, year) => {
    const date = new Date(year, month, 1);
    let days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setDays([]);
    days.forEach((day) => {
      const dateVal = new Date(day).getDate();

      const monthVal = new Date(day).getMonth();
      const dayVal = new Date(day).toLocaleString("en-us", {
        weekday: "short",
      });
      if (monthVal === selectedMonth) {
        setDays((prev) => [
          ...prev,
          {
            date: dateVal,
            month: allMonths[monthVal],
            day: dayVal,
            year: currenYear,
          },
        ]);
      }
    });
  };

  useEffect(() => {
    getMonthDayArray(selectedMonth, currenYear);
  }, [selectedMonth, currenYear]);
  console.log(daysList);
  return (
    <>
      <main className={styles.displayer_container}>
        <section className={styles.date_display_wrapper}>
          {daysList.map((day) => {
            return (
              <button className={styles.date_btn}>
                <span>{day.day}</span>
                <span>{day.date}</span>
              </button>
            );
          })}
        </section>
      </main>
    </>
  );
}

function MonthsList({ months, selectHandler, selectedMonth }) {
  return (
    <>
      <div className={styles.calendar_box}>
        {months.map((m, idx) => {
          return (
            <div className={`${styles.wrap_span} }`} key={idx}>
              <span
                onClick={() => selectHandler(m, idx)}
                className={`${styles.month_span} ${
                  selectedMonth.name === m ? styles.selected_month_active : ""
                }`}
              >
                {m}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
