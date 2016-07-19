"use strict";

const React = require('react');

module.exports = class Accounts extends React.Component {

    componentWillMount() {
        this.props.conn.query('SELECT Id, Name FROM Account', (error, res) => {
            if (error) {
                console.error(error);
                this.setState({
                    error
                });
                return;
            }

            this.setState({
                accounts: res,
            });
        });
    }

    render() {
        if (!this.state || !this.state.accounts) {
            return (
                <div><em>Loading accounts...</em></div>
            );
        }

        return (
            <div>
                <h2>Accounts</h2>
                <ul>
                    { this.state.accounts.records.map((account, i) => 
                        <li key={i}>
                            {account.Name} ({account.Id})
                        </li>
                    ) }
                </ul>
            </div>
        );
    }
};
