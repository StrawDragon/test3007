import React from "react";
import MaterialTable from "material-table";
import uuid from "uuid";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Наименование",
        field: "name"
      },
      {
        title: "Дата Создания",
        field: "dateOfCreate",
        type: "date"
      },
      {
        title: "Цена",
        field: "price"
      },
      {
        title: "Город",
        field: "city"
      },
      {
        title: "Страна",
        field: "country",
        type: "Dropdown"
      },
      {
        title: "Количество(шт)",
        field: "pieces"
      },
      {
        title: "Количество(граммы)",
        field: "piecesInGramm"
      }
    ],
    data: [
      {
        id: uuid(),
        name: "Картофель",
        country: "Russia",
        city: "Калуга",
        dateOfCreate: "08.07.2018",
        price: "1020",
        pieces: "1",
        piecesInGramm: "1000"
      },
      {
        id: uuid(),
        name: "Мука",
        country: "Russia",
        city: "Калуга",
        dateOfCreate: "12.12.2018",
        price: "1022",
        pieces: "1",
        piecesInGramm: "1000"
      },
      {
        id: uuid(),
        name: "Гречка",
        country: "Russia",
        city: "Калуга",
        dateOfCreate: "10.11.2018",
        price: "220",
        pieces: "1",
        piecesInGramm: "1000"
      },
      {
        id: uuid(),
        name: "Кофе",
        country: "Russia",
        city: "Калуга",
        dateOfCreate: "09.09.2018",
        price: "20",
        pieces: "1",
        piecesInGramm: "1000"
      },
      {
        id: uuid(),
        name: "Сыр",
        country: "Russia",
        city: "Калуга",
        dateOfCreate: "29.10.2018",
        price: "120",
        pieces: "34",
        piecesInGramm: "700"
      }
    ]
  });

  return (
    <div>
      <MaterialTable
        title="Список покупок"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: async newData => {
            const data = [...state.data];
            data.push(newData);
            setState({ ...state, data });
          },
          onRowUpdate: async (newData, oldData) => {
            const data = [...state.data];
            data[data.indexOf(oldData)] = newData;
            setState({ ...state, data });
          },
          onRowDelete: async oldData => {
            const data = [...state.data];
            data.splice(data.indexOf(oldData), 1);
            setState({ ...state, data });
          }
        }}
      />
    </div>
  );
}
