# 12 Factor App - EVF Compatibility Chart
<table border="0" width="0">
    <header>
      <td></td>
      <td>
      ** Factors **
      </td>
      <td>
      ** Description **
      </td>
    </header>    
    <tr>
        <td>
        *** I. ***
        </td>
        <td>
        *** Codebase *** :
        One codebase tracked in revision control, many deploys
        </td>
        <td>
          <table>
            <tr>
              <td>
                ![tick](./tick-15.png)
              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                ![tick](./tick-15.png)
              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                ![tick](./tick-15.png)
              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                ![tick](./tick-15.png)
              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                ![tick](./tick-15.png)
              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                ![tick](./tick-15.png)
              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                ![tick](./tick-15.png)
              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                ![tick](./tick-15.png)
              </td>
              <td>

              </td>
            </tr>
          </table>
       </td>
    </tr>
    <tr>
        <td>
        *** II. ***
        </td>
        <td>
        *** Dependencies *** :
        Explicitly declare and isolate dependencies
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![tick](./tick.png)    
        </td>
        <td>
        *** III. Config *** :
        Store config in the environment
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![tick](./tick.png)
        </td>
        <td>
        *** IV. Backing services *** :
        Treat backing services as attached resources  
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![tick](./tick.png)    
        </td>
        <td>
        *** V. Build, release, run *** :
        Strictly separate build and run stages  
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![cross](./cross.png)  
        </td>
        <td>
        *** VI. Processes *** :
        Execute the app as one or more stateless processes  
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![tick](./tick.png)  
        </td>
        <td>
        *** VII. Port binding *** :
        Export services via port binding
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![cross](./cross.png)   
        </td>
        <td>
        *** VIII. Concurrency *** :
        Scale out via the process model
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![tick](./tick.png)      
        </td>
        <td>
        *** IX. Disposability *** :
        Maximize robustness with fast startup and graceful shutdown
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![cross](./cross.png)    
        </td>
        <td>
        *** X. Dev/prod parity *** :
        Keep development, staging, and production as similar as possible
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![tick](./tick.png)  
        </td>
        <td>
        *** XI. Logs *** :
        Treat logs as event streams
        </td>
        <td>

       </td>
    </tr>
    <tr>
        <td>
        ![cross](./cross.png)     
        </td>
        <td>
        *** XII. Admin processes *** :
        Run admin/management tasks as one-off processes
        </td>
        <td>

       </td>
    </tr>
</table>
