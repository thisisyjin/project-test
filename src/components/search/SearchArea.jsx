import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../../../node_modules/axios/index';

const SearchAreaBlock = styled.div`
  input,
  select {
    border: none;
    padding: 10px 0;
    margin-left: 10px;
    font-size: 16px;
    border-bottom: 2px solid #33333360;
  }
  input {
    width: 150px;
    margin-left: 15px;
  }

  .test-area {
    margin-top: 100px;
    margin-left: 20px;
  }
  p {
    margin-top: 15px;
    margin-left: 50px;
  }
  p + p {
    margin-top: 8px;
  }
`;

const SearchArea = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState({});
  const [mainArea, setMainArea] = useState();
  const [subArea, setSubArea] = useState();

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const fetchData = async () => {
    const areas = await axios.get(
      'https://4114d7d7-edea-423c-94ce-33ff5762a771.mock.pstmn.io/api/test',
      // mock test server
    );
    const areaArr = areas.data.area;
    console.log(areaArr);
    setData(areaArr);
  };

  const changeMainIndex = (e) => {
    setMainArea(+e.target.value);
    console.log(+e.target.value);
  };

  const changeSubIndex = (e) => {
    setSubArea(+e.target.value);
    console.log(+e.target.value);
  };

  // Debounce 적용
  //   useEffect(() => {
  //     const debounce = setTimeout(() => {
  //       if (value) fetchData();
  //     }, 300);
  //     return () => {
  //       clearTimeout(debounce);
  //     };
  //   }, [value]);

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  useEffect(() => {
    if (mainArea) {
      console.log(data.sub[mainArea]);
    }
  }, [mainArea]);

  return (
    <SearchAreaBlock>
      <input
        type="text"
        value={value}
        onChange={onChangeInput}
        placeholder="지역 입력"
      />
      <select
        name="main-area"
        id="main-area"
        onChange={changeMainIndex}
        defaultValue="-"
      >
        <option value="null">시/도</option>

        {data.main ? (
          <>
            <option value="0">{data.main[0]}</option>
            <option value="1">{data.main[1]}</option>
            <option value="2">{data.main[2]}</option>
            <option value="3">{data.main[3]}</option>
            <option value="4">{data.main[4]}</option>
            <option value="5">{data.main[5]}</option>
            <option value="6">{data.main[6]}</option>
            <option value="7">{data.main[7]}</option>
            <option value="8">{data.main[8]}</option>
            <option value="9">{data.main[9]}</option>
            <option value="10">{data.main[10]}</option>
            <option value="11">{data.main[11]}</option>
            <option value="12">{data.main[12]}</option>
            <option value="13">{data.main[13]}</option>
            <option value="14">{data.main[14]}</option>
            <option value="15">{data.main[15]}</option>
          </>
        ) : null}
      </select>
      <select name="sub-area" id="sub-area" onChange={changeSubIndex}>
        {mainArea >= 0 ? (
          <>
            {data.sub[mainArea].map((val, index) => (
              <option value={index} key={`sub${index}`}>
                {val}
              </option>
            ))}
          </>
        ) : (
          <option value="">구/군</option>
        )}
      </select>
      <div>
        <h4 className="test-area">선택한 지역</h4>
        {mainArea && subArea && (
          <>
            <p>{data.main[mainArea]}</p>
            <p>{data.sub[mainArea][subArea]}</p>
          </>
        )}
      </div>
    </SearchAreaBlock>
  );
};

export default SearchArea;
