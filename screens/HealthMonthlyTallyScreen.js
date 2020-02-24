import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

class ChildDailyTallyScreen extends PureComponent {
  state = {
    tableTitle1: ['ANTIGENS', 'FIXED SESSION', 'OUTREACH SESSION'],
    tableTitle2: ['Age Groups', 'Monthly Summary', 'Monthly Summary'],
    tableTitle3: [
      'Hep.B 0',
      'OPV 0',
      'BCG',
      'OPV 1',
      'PENTA 1',
      'PCV 1',
      'ROTA 1',
      'OPV 2',
      'PENTA 2',
      'PCV 2',
      'ROTA 2',
      'OPV 3',
      'PENTA 3',
      'PCV 3',
      'ROTA 3',
      'IPV',
      'VITAMIN A',
      'MEASLES 1',
      'FULLY IMMUNIZED',
      'YELLOW FEVER',
      'MEN A',
      'MEASLES 2',
      'TD 1',
      'TD 2',
      'TD 3',
      'TD 4',
      'TD 5',
      'HPV',
      'COMMENTS',
    ],
    data: [
      ['0-24 Hours', '', ''],
      ['24 Hours - 2 Weeks', '', ''],
      ['0-2 Weeks', '', ''],
      ['0-11 Months', '', ''],
      ['6 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['6 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['6 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['6 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['10 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['10 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['10 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['10 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['14 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['14 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['14 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['14 Weeks - 11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['14 Weeks - 11 Months', '', ''],
      ['6-11 Months (100,000 IU)', '', ''],
      ['12-23 Months (100,000 IU)', '', ''],
      ['9-11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['', '', ''],
      ['9-11 Months', '', ''],
      ['12-23 Months', '', ''],
      ['9-11 Months', '', ''],
      ['18-23 Months', '', ''],
      ['Pregnant', '', ''],
      ['Non Pregnant', '', ''],
      ['Pregnant', '', ''],
      ['Non Pregnant', '', ''],
      ['Pregnant', '', ''],
      ['Non Pregnant', '', ''],
      ['Pregnant', '', ''],
      ['Non Pregnant', '', ''],
      ['Pregnant', '', ''],
      ['Non Pregnant', '', ''],
      ['9 Years - 14 Years', '', ''],
      ['', '', ''],
    ],
  };

  dataArr = () => {
    const arr = new Array(this.state.tableTitle3.length).fill(60);
    arr[1] = 30;
    arr[2] = 30;
    arr[15] = 30;
    arr[18] = 30;
    arr[20] = 30;
    arr[21] = 30;
    arr[28] = 30;
    return arr;
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.dateText}>Select Month to View Data</Text>
          <Text style={styles.dateText}>Selected Month: January 2020</Text>
        </View>
        <ScrollView horizontal={true}>
          <ScrollView>
            <View style={styles.tableContainer}>
              <Table borderStyle={styles.tableBorderStyle}>
                <Row
                  data={this.state.tableTitle1}
                  style={styles.headerStyle}
                  widthArr={[350, 300, 300]}
                  textStyle={styles.headerTextStyle}
                />
                <Row
                  data={this.state.tableTitle2}
                  style={styles.headerStyle}
                  widthArr={[350, 300, 300]}
                  textStyle={styles.headerTextStyle}
                />
              </Table>
              <TableWrapper style={{flexDirection: 'row'}}>
                <Table
                  style={{width: 150}}
                  borderStyle={styles.tableBorderStyle}>
                  <Col
                    data={this.state.tableTitle3}
                    heightArr={this.dataArr()}
                    style={styles.headerRightStyle}
                    textStyle={styles.headerRightText}
                  />
                </Table>
                <Table style={{flex: 1}} borderStyle={styles.tableBorderStyle}>
                  {this.state.data.map((data, i) => {
                    const clr = i % 2 === 0 ? 'white' : '#8DE3B1';
                    return (
                      <Row
                        key={i}
                        data={data}
                        style={{height: 30, backgroundColor: clr}}
                        widthArr={[200, 300, 300]}
                        textStyle={{
                          color: '#333333',
                          textAlign: 'left',
                          paddingHorizontal: 10,
                        }}
                      />
                    );
                  })}
                </Table>
              </TableWrapper>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20,
  },
  tableContainer: {
    padding: 10,
  },
  tableBorderStyle: {
    borderWidth: 1,
    borderColor: '#D2D2D2',
  },
  headerStyle: {
    backgroundColor: 'rgba(33, 150, 83, 1)',
    height: 30,
  },
  headerRightStyle: {
    backgroundColor: '#27AE60',
  },
  headerTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerRightText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ChildDailyTallyScreen;
