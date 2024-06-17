const getState = (plate) => {
  const plate_sequences = [
    [/^((A[A-Z][A-Z])|(B[A-E][A-Z]))/, "PR"],
    [/^((BF[A-Z])|([C-F][A-Z][A-Z])|(G[A-J][A-Z])|(GK[A-I]))/, "SP"],
    [/^((GK[J-Z])|(H[A-N][A-Z])|(HO[A-K]))/, "MG"],
    [/^((HO[L-Z])|(HP[A-Z])|(HQ[A-E]))/, "MA"],
    [/^((HQ[F-Z])|(H[R-S][A-Z])|(HQ[A-K]))/, "MS"],
    [/^((HT[X-Z])|(H[U-X][A-Z])|(HZA))/, "CE"],
    [/^((HZ[B-Z])|(IA[A-P]))/, "SE"],
    [/^((IA[Q-Z])|(J[A-C][A-Z])|(JD[A-O]))/, "RS"],
    [/^((JD[P-Z])|(J[E-J][A-Z])|(JK[A-R]))/, "DF"],
    [/^((JK[S-Z])|(J[L-S][A-Z])|(JS[A-Z]))/, "BA"],
    [/^((JT[A-Z])|(J[U-V][A-Z])|(JW[A-E]))/, "PA"],
    [/^((JW[F-Z])|(JX[A-Y]))/, "AM"],
    [/^((JXZ)|(KA[A-U]))/, "MT"],
    [/^((KA[V-Z])|(K[B-E][A-Z])|(KF[A-C]))/, "GO"],
    [/^((KF[D-Z])|(K[G-L][A-Z])|(KM[A-E]))/, "PE"],
    [/^((KM[F-Z])|(K[N-Z][A-Z])|(L[A-U][A-Z])|(LV[A-E]))/, "RJ"],
    [/^((LV[F-Z])|(LW[A-Q]))/, "PI"],
    [/^((LW[R-Z])|(M[A-L][A-Z])|(MM[A-M]))/, "SC"],
    [/^((MM[N-Z])|(MN[A-Z])|(MO[A-W]))/, "PB"],
    [/^((MO[X-Z])|(M[P-S][A-Z])|(MT[A-Z]))/, "ES"],
    [/^((MU[A-Z])|(MV[A-K]))/, "AL"],
    [/^((MV[L-Z])|(MW[A-Z])|(MX[A-G]))/, "TO"],
    [/^((MX[H-Z])|(MY[A-Z])|(MZ[A-M]))/, "RN"],
    [/^((MZ[N-Z])|(NA[A-G]))/, "AC"],
    [/^((NA[H-Z])|(NBA))/, "RR"],
    [/^((NB[B-Z])|(N[C-D][A-Z])|(NE[A-H]))/, "RO"],
    [/^((NE[I-Z])|(NF[A-B]))/, "AP"],
    [/^((NF[C-Z])|(NG[A-Z]))/, "GO"],
    [/^((NH[A-T]))/, "MA"],
    [/^((NH[U-Z])|(NI[A-X]))/, "PI"],
    [/^((NI[Y-Z])|(NJ[A-W]))/, "MT"],
    [/^((NJ[X-Z])|(NK[A-Z])|(NL[A-U]))/, "GO"],
    [/^((NL[V-Z])|(NM[A-O]))/, "AL"],
    [/^((NM[P-Z])|(NN[A-I]))/, "MA"],
    [/^((NN[J-Z])|(NO[A-H]))/, "RN"],
    [/^((NO[I-Z])|(NP[A-B]))/, "AM"],
    [/^((NP[C-Z])|(NQ[A-K]))/, "PB"],
    [/^((NQ[L-Z])|(NR[A-E]))/, "CE"],
    [/^((NR[F-Z])|(NS[A-D]))/, "MS"],
    [/^((NS[E-Z])|(NT[A-C]))/, "PA"],
    [/^((NT[D-W]))/, "BA"],
    [/^((NT[X-Z])|(NU[A-G]))/, "MT"],
    [/^((NU[H-L]))/, "RR"],
    [/^((NU[M-Z])|(NV[A-F]))/, "CE"],
    [/^((NV[G-N]))/, "SE"],
    [/^((NV[O-Z])|(NW[A-R]))/, "GO"],
    [/^((NW[S-Z])|(NX[A-Q]))/, "MA"],
    [/^((NX[R-T]))/, "AC"],
    [/^((NX[U-W]))/, "PE"],
    [/^((NX[X-Z])|(NY[A-G]))/, "MG"],
    [/^((NY[H-Z])|(NZ[A-Z]))/, "BA"],
    [/^((OA[A-O]))/, "AM"],
    [/^((OA[P-Z])|(OB[A-S]))/, "MT"],
    [/^((OB[T-Z])|(OCA))/, "PA"],
    [/^((OC[B-U]))/, "CE"],
    [/^((OC[V-Z])|(OD[A-T]))/, "ES"],
    [/^((OD[U-Z])|(OE[A-I]))/, "PI"],
    [/^((OE[J-S]))/, "SE"],
    [/^((OE[T-Z])|(OF[A-H]))/, "PB"],
    [/^((OF[I-W]))/, "PA"],
    [/^((OF[X-Z])|(OG[A-G]))/, "PB"],
    [/^((OG[H-Z])|(OHA))/, "GO"],
    [/^((OH[B-K]))/, "AL"],
    [/^((OH[L-W]))/, "RO"],
    [/^((OH[X-Z])|(OI[A-Q]))/, "CE"],
    [/^((OI[R-Z])|(OJ[A-Q]))/, "MA"],
    [/^((OJ[R-Z])|(OK[A-C]))/, "RN"],
    [/^(OK[D-H])/, "SC"],
    [/^((OK[I-Z])|(OL[A-G]))/, "BA"],
    [/^((OL[H-N]))/, "TO"],
    [/^((OL[O-Z])|(OM[A-H]))/, "MG"],
    [/^((OM[I-Z])|(ON[A-Z])|(OO[A-F]))/, "GO"],
    [/^((OO[G-U]))/, "MS"],
    [/^((OO[V-Z])|(O[P-Q][A-Z])|(OR[A-C]))/, "MG"],
    [/^((OR[D-M]))/, "AL"],
    [/^((OR[N-Z])|(OS[A-V]))/, "CE"],
    [/^((OS[W-Z])|(OT[A-Z]))/, "PA"],
    [/^((OU[A-E]))/, "PI"],
    [/^((OU[F-Z])|(OV[A-D]))/, "BA"],
    [/^((OV[E-F]))/, "ES"],
    [/^((OVG))/, "AC"],
    [/^((OV[H-L]))/, "ES"],
    [/^((OV[M-V]))/, "DF"],
    [/^((OV[W-Y]))/, "PI"],
    [/^((OVZ)|(OW[A-G]))/, "RN"],
    [/^((OW[H-Z])|(OX[A-K]))/, "MG"],
    [/^((OXL))/, "RO"],
    [/^((OXM))/, "AM"],
    [/^((OXN))/, "AL"],
    [/^((OXO))/, "PB"],
    [/^((OXP))/, "AC"],
    [/^((OX[Q-Z]))/, "MA"],
    [/^((OY[A-C]))/, "TO"],
    [/^((OY[D-K]))/, "ES"],
    [/^((OY[L-Z]))/, "PE"],
    [/^((OZA))/, "CE"],
    [/^((OZB))/, "SE"],
    [/^((OZ[C-V]))/, "BA"],
    [/^((OZ[W-Z])|(P[A-B][A-Z]))/, "DF"],
    [/^((PC[A-Z])|(P[D-G][A-Z]))/, "PE"],
    [/^((PH[A-Z]))/, "AM"],
    [/^((PI[A-Z]))/, "PI"],
    [/^((PJ[A-Z])|(P[J-K][A-Z]))/, "BA"],
    [/^((P[M-O][A-Z]))/, "CE"],
    [/^((PP[A-Z]))/, "ES"],
    [/^((P[Q-R][A-Z]))/, "GO"],
    [/^((P[S-T][A-Z]))/, "MA"],
    [/^((P[U-Z][A-Z]))/, "MG"],
    [/^((QA[A-Z]))/, "MS"],
    [/^((Q[B-C][A-Z]))/, "MT"],
    [/^((Q[D-E][A-Z]))/, "PA"],
    [/^((QF[A-Z]))/, "PB"],
    [/^((QG[A-Z]))/, "RN"],
    [/^((Q[H-J][A-Z]))/, "SC"],
    [/^((QK[A-M]))/, "TO"],
    [/^((QK[N-Z]))/, "SE"],
    [/^((QL[A-M]))/, "AL"],
    [/^((QL[N-T]))/, "AP"],
    [/^((QL[U-Z]))/, "AC"],
    [/^((QM[A-P]))/, "SE"],
    [/^((QM[Q-Z])|(Q[O-Q][A-Z]))/, "MG"],
    [/^((QRA))/, "RO"],
    [/^((QR[B-M]))/, "ES"],
    [/^((QR[N-Z]))/, "PI"],
    [/^((QS[A-M]))/, "PB"],
    [/^((QS[N-Z]))/, "SP"],
    [/^((QT[A-J]))/, "RO"],
    [/^((QT[K-M]))/, "SC"],
    [/^((QT[N-S]))/, "GO"],
    [/^((QTT))/, "AL"],
    [/^((QT[U-Z]))/, "BA"],
    [/^((QU[A-Z]))/, "MG"],
    [/^((QV[A-Z]))/, "PA"],
    [/^((QW[A-F]))/, "TO"],
    [/^((QW[G-L]))/, "AL"],
    [/^((QW[M-Q]))/, "AC"],
    [/^((QW[R-Z])|(QX[A-Z]))/, "MG"],
    [/^((QY[A-Z]))/, "PE"],
    [/^((QZ[A-Z]))/, "AM"],
    [/^((RA[A-J]))/, "SC"],
    [/^((RA[K-Z]))/, "MT"],
    [/^((RB[A-J]))/, "ES"],
    [/^((RB[K-Z])|(RC[A-N]))/, "GO"],
    [/^((RC[O-Z])|(RD[A-R]))/, "BA"],
    [/^((RD[S-Z])|(RE[A-B]))/, "SC"],
    [/^((RE[C-V]))/, "DF"],
    [/^((RE[W-Z]))/, "MS"],
    [/^((RF[A-Z])|(RG[A-D]))/, "MG"],
    [/^((RG[E-M])|(RGN))/, "RN"],
    [/^((RG[O-U]))/, "AL"],
    [/^((RG[V-Z]))/, 0],
    [/^((RH[A-Z]))/, "PR"],
    [/^((RI[A-N]))/, "CE"],
    [/^((RIO))/, "RJ"],
    [/^((RI[P-Z])|(RJ[A-Z])|(RK[A-V]))/, "RJ"],
    [/^((RK[W-Z])|(RL[A-P]))/, "SC"],
    [/^((RL[Q-Z])|(RM[A-C]))/, "PB"],
    [/^((RM[D-Z])|(RN[A-Z]))/, "MG"],
    [/^((RO[A-Z]))/, "MA"],
    [/^((RP[A-Z])|(RQ[A-L]))/, "BA"],
    [/^((RQ[M-Z]))/, "ES"],
    [/^((RR[I-Z]))/, "MT"],
    [/^((RS[A-F]))/, "TO"],
    [/^((RS[G-T]))/, "PI"],
    [/^((RS[UZ]))/, "RO"],
    [/^((RT[A-Z])|(R[U-V][A-Z]))/, "MG"],
    [/^((RW[A-J]))/, "MS"],
    [/^((RW[K-Z])|(RX[A-D]))/, "PA"],
    [/^((RX[E-J]))/, 0],
    [/^((RX[K-Z])|(RY[A-I]))/, "SC"],
    [/^((RY[J-Z]))/, 0],
    [/^((RZ[A-D]))/, "RR"],
    [/^((RZ[E-Z]))/, "PE"],
    [/^((SA[A-J]))/, "AL"],
    [/^((SA[K-M]))/, "AP"],
    [/^((SA[N-Z])|(SB[A-V]))/, "CE"],
    [/^((SB[W-Z])|(SC[A-Z])|(SD[A-S]))/, "GO"],
    [/^((SD[T-Z])|([S][E-Z][A-Z])|[T-Z][A-Z][A-Z])/, 0],
  ];

  let state;
  for (let i = 0; i < plate_sequences.length; i++) {
    if (plate_sequences[i][0].test(plate)) {
      state = plate_sequences[i][1];
      break;
    }
  }

  return state;
};
const validPlate = /[A-Z]{3}\d[A-Z]\d{2}/;
let input = document.querySelector(".input");
let output = document.querySelector(".output");

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const inputValue = input.value.toUpperCase();
    console.log(inputValue);

    try {
      if (!inputValue.match(validPlate)) throw new Error();

      let state = getState(inputValue);
      switch (state) {
        case "AC":
          state = "Acre";
          break;
        case "AL":
          state = "Alagoas";
          break;
        case "AP":
          state = "Amapá";
          break;
        case "AM":
          state = "Amazonas";
          break;
        case "BA":
          state = "Bahia";
          break;
        case "CE":
          state = "Ceará";
          break;
        case "ES":
          state = "Espírito Santo";
          break;
        case "GO":
          state = "Goiás";
          break;
        case "MA":
          state = "Maranhão";
          break;
        case "MT":
          state = "Mato Grosso";
          break;
        case "MS":
          state = "Mato Grosso do Sul";
          break;
        case "MG":
          state = "Minas Gerais";
          break;
        case "PA":
          state = "Pará";
          break;
        case "PB":
          state = "Paraíba";
          break;
        case "PR":
          state = "Paraná";
          break;
        case "PE":
          state = "Pernambuco";
          break;
        case "PI":
          state = "Piauí";
          break;
        case "RJ":
          state = "Rio de Janeiro";
          break;
        case "RN":
          state = "Rio Grande do Norte";
          break;
        case "RS":
          state = "Rio Grande do Sul";
          break;
        case "RO":
          state = "Rondônia";
          break;
        case "RR":
          state = "Roraima";
          break;
        case "SC":
          state = "Santa Catarina";
          break;
        case "SP":
          state = "São Paulo";
          break;
        case "SE":
          state = "Sergipe";
          break;
        case "TO":
          state = "Tocantins";
          break;
        case "DF":
          state = "Distrito Federal";
          break;
        default:
          state = 0;
          break;
      }

      output.innerHTML =
        state == 0
          ? "Sequência ainda não foi atribuída à nenhum estado"
          : `Placa: ${inputValue}<br>Estado: ${state}`;
    } catch (e) {
      output.innerHTML =
        "Placa inválida. Informe uma nova placa no formato (L L L Nº L Nº Nº)";
      console.log("Placa inválida");
    }
  }
});

