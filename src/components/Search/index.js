import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import logoCar from '../../assets/logocar.svg';
import logoMotorcycle from '../../assets/logomotorcycle.svg';
import arrowRight from '../../assets/arrowRight.jpeg';

import {
  Container,
  Header,
  Options,
  BuyOption,
  BuyCar,
  ImageCar,
  TextBuyCar,
  BuyMotorcycle,
  ImageMotorcycle,
  TextBuyMotorcycle,
  Wrapper,
  Checkbox,
  Box,
  BoxLeft,
  LocalInput,
  YearPriceInput,
  BoxRight,
  ModelCarInput,
  VersionInput,
  BoxSend,
  AdvancedSearch,
  Send,
  SelectStyle,
  Cars,
  Car,
  CarImage,
  CarModel,
  CarPriceYearKm,
  CarMakeModel,
  CarVersion,
  CarPrice,
  CarYearKm,
  CarYear,
  CarKm,
} from './styles';

const Search = () => {

  const [makes, setMakes] = useState();
  const [selectMake, setSelectMake] = useState();

  const [models, setModels] = useState();
  const [selectModel, setSelectModel] = useState();

  const [versions , setVersions] = useState();
  const [selectVersion, setSelectVersion] = useState();

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function handleMakes() {
      try {
        const response = await api.get('Make');
        setMakes(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    handleMakes();
  }, []);

  useEffect(() => {
    setModels(null);
    async function handleModels() {
      try {
        const response = await api.get(`Model?MakeID=${selectMake.ID}`);
        setModels(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    selectMake && handleModels();
  }, [selectMake]);

  useEffect(() => {
    setVersions(null);
    async function handleVersions() {
      try {
        const response = await api.get(`Version?ModelID=${selectModel.ID}`);
        setVersions(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    selectModel && handleVersions();
  }, [selectModel]);

    useEffect(() => {
      setResults(null);
      async function handleResults() {
        try {
          const response = await api.get(`Vehicles?Page=1`);
          setResults(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      selectVersion && handleResults();
    }, [selectVersion]);




  return (
    <>
      <Container>
        <Header>
          <a href="/"><img src={logoImg} alt="Webmotors" /></a>
          <Options>
            <BuyOption>
              <BuyCar>
                <a href="/">
                  <ImageCar>
                  <img src={logoCar} alt="Comprar Carros"/>
                  </ImageCar>
                  <TextBuyCar>
                    <p>Comprar</p>
                    <h2>Carros</h2>
                  </TextBuyCar>
                </a>
              </BuyCar>
              <BuyMotorcycle>
                <a href="/motos">
                    <ImageMotorcycle>
                    <img src={logoMotorcycle} alt="Comprar Motos"/>
                    </ImageMotorcycle>
                    <TextBuyMotorcycle>
                      <p>Comprar</p>
                      <h2>Motos</h2>
                    </TextBuyMotorcycle>
                  </a>
              </BuyMotorcycle>
            </BuyOption>
            <button type="submit">
              <a href="Vender">Vender meu carro</a>
            </button>
          </Options>
        </Header>
        <Wrapper>
          <Checkbox>
            <input type="checkbox" name="Novos" />
            <p>Novos</p>
            <input type="checkbox" name="Usados" />
            <p>Usados</p>
          </Checkbox>
          <Box>
            <BoxLeft>
              <LocalInput>
                <input type="text" placeholder="Onde:" />
                <input type="text" placeholder="Raio:" />

              </LocalInput>
              <YearPriceInput>
                <SelectStyle placeholder="Ano Desejado" />
                <SelectStyle placeholder="Faixa de Preço" />

              </YearPriceInput>
            </BoxLeft>
            <BoxRight>
              <ModelCarInput>
                  <SelectStyle
                    placeholder="Marca:"
                    key={mak => mak.ID}
                    name="make_id"
                    options={makes}
                    onChange={setSelectMake}
                    getOptionValue={mak => mak.Name}
                    getOptionLabel={mak => mak.Name}
                  />
                  {models ? (
                    <SelectStyle
                      placeholder="Modelo:"
                      key={mod => mod.ID}
                      name="model_id"
                      options={models}
                      onChange={setSelectModel}
                      getOptionValue={mod => mod.Name}
                      getOptionLabel={mod => mod.Name}
                    />
                  ) : (
                    <SelectStyle
                    placeholder="Modelo: Todos"
                    />
                  )
                  }
              </ModelCarInput>

              <VersionInput>
              {versions ? (
                    <SelectStyle
                      placeholder="Versão:"
                      key={vers => vers.ID}
                      name="version_id"
                      options={versions}
                      onChange={setSelectVersion}
                      getOptionValue={vers => vers.Name}
                      getOptionLabel={vers => vers.Name}
                    />
                  ) : (
                    <SelectStyle
                    placeholder="Versão: Todas"
                    />
                  )
                  }
              </VersionInput>
            </BoxRight>
          </Box>
          <BoxSend>
            <AdvancedSearch>
              <img src={arrowRight} />
              <a href="busca">Busca Avançada</a>
            </AdvancedSearch>
            <Send>
              <a href="/">Limpar filtros</a>
              <button type="submit" >Ver ofertas</button>
            </Send>
          </BoxSend>
        </Wrapper>
        <Cars>
          {results &&
            results.map(result => (
          <Car key={result.ID} >
            <CarImage>
              <img src={result.Image}
              alt={result.Model}/>
            </CarImage>
            <CarModel>
              <CarMakeModel>
                <h1>{result.Make}</h1>
                <h2>{result.Model}</h2>
              </CarMakeModel>
              <CarVersion>
                <p>{result.Version}</p>
              </CarVersion>
            </CarModel>
            <CarPriceYearKm>
              <CarPrice>
                <h3>R$ {result.Price}</h3>
              </CarPrice>
              <CarYearKm>
                <CarYear>
                  <p>{result.YearFab}/</p>
                  <p>{result.YearModel}</p>
                </CarYear>
                <CarKm>
                  <p>{result.KM} km</p>
                </CarKm>
              </CarYearKm>
            </CarPriceYearKm>
          </Car>
          ))
        }
        </Cars>

      </Container>
    </>
  );
};

export default Search;
